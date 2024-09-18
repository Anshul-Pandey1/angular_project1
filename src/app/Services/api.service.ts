import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }



  //post method using rxjs map

  addListingWithMap(data:any)
  {
 return this.http.post('http://localhost:3000/properties', data).pipe(map((res:any)=>
 {

  return res;

 }));
}


// get method using rxjs

getAllProp()
{
return this.http.get('http://localhost:3000/properties').pipe(map((res:any)=>
{

  return res;
}));
}


//put method to updte data

updateProp(data:any , id:number )
{
return this.http.put('http://localhost:3000/properties/' + id , data).pipe(map((res:any)=>
{

 return res;
}))
}


//delete method 

deleteProp(id:number)
{
  return this.http.delete('http://localhost:3000/properties/' +id).pipe(map((res:any)=>
  {
    console.log(res);
    return res;
  }))
}

}
