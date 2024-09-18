import { Component , OnInit} from '@angular/core';
import { FormBuilder , FormGroup , FormControlName } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { Property } from './property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit
{

  allProperty:any;
  formValue! : FormGroup;
  propertyModelObj: Property = new Property();
  showAdd : boolean = true;
  showEdit : boolean = true;
  data: any;
  id : any
constructor(private fb:FormBuilder , private api: ApiService)
{

}

ngOnInit(): void 
{
  this.formValue = this.fb.group(
    {
    pname : [''],
    pprice: [''],
    plocation:[''],
    pdetails:[''],
    }
  )
  this.getAllProperty();
}

getAllProperty()
{
  this.api.getAllProp().subscribe((res)=>
  {
    console.log(res);
    this.allProperty = res;
  });
}

addProp()
{
  this.propertyModelObj.pname = this.formValue.value.pname;
  this.propertyModelObj.pprice = this.formValue.value.pprice;
  this.propertyModelObj.plocation = this.formValue.value.plocation;
  this.propertyModelObj.pdetails = this.formValue.value.pdetails;
  console.log(this.propertyModelObj);
  this.api.addListingWithMap(this.propertyModelObj).subscribe((res)=>
    {
      console.log(res);
      alert("added sucessfully");
      let ref = document.getElementById('clear');
      ref?.click()
      this.formValue.reset();
      this.getAllProperty();
    },
    err=>
    {
      alert("something went wromg");
    }
    );
}

deleteProp(data:any)
{
  this.api.deleteProp(data.id).subscribe((res)=>
  {
    alert("deleted sucessfully");
    this.getAllProperty();
  })
}

updateProp(data:any , id:number)
{
  this.propertyModelObj.pname = this.formValue.value.pname;
  this.propertyModelObj.pprice = this.formValue.value.pprice;
  this.propertyModelObj.plocation = this.formValue.value.plocation;
  this.propertyModelObj.pdetails = this.formValue.value.pdetails;
  this.api.updateProp(data , id).subscribe((res:any)=>
  {
    alert("Data update sucessfully");
  })
}

clickaddproperty()
{
  this.formValue.reset();
  this.showAdd = true;
  this.showEdit = false;
}

clickEditProperty()
{
  this.formValue.reset();
  this.showAdd = false;
  this.showEdit = true;
}

}
