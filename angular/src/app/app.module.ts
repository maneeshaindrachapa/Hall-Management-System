import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';

import {LoginService} from "./services/login.service";
import {AdminService} from "./services/admin.service";
import {UserService} from "./services/user.service";
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/components/profile/profile.component';
import { HomeComponent } from './components/admin/components/home/home.component';
import { AddUserComponent } from './components/admin/components/add-user/add-user.component';
import { SearchComponent } from './components/user/components/search/search.component';
import { PaymentComponent } from './components/admin/components/payment/payment.component';
import { UserdetailsComponent } from './components/admin/components/userdetails/userdetails.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';





const appRoutes: Routes= [
  {path:"", component:LoginComponent},
  {path:"employee", component:EmployeeComponent},
  {path:"user", component:UserComponent,children:[{path:"profile",component:ProfileComponent},{path:"search",component:SearchComponent}]},
  {path:"admin", component:AdminComponent,children:[{path:"home",component:HomeComponent},{path:"adduser",component:AddUserComponent},{path:"payment",component:PaymentComponent},{path:"userDetails",component:UserdetailsComponent}]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    HomeComponent,
    AddUserComponent,
    SearchComponent,
    PaymentComponent,
    UserdetailsComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService,AdminService,UserService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
