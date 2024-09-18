import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { PropertiesComponent } from './Components/properties/properties.component';

const routes: Routes = [

  {path: '' , redirectTo: 'login' , pathMatch:'full'},

  {path: 'login' , component: LoginComponent},

  {path: 'signup' , component: SignupComponent},

  {path: 'properties' , component:PropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
