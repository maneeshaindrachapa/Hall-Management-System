import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';

import {LoginService} from "./services/login.service";
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/components/profile/profile.component';
import { HomeComponent } from './components/admin/components/home/home.component';


const appRoutes: Routes= [
  {path:"", component:LoginComponent},
  {path:"user", component:UserComponent,children:[{path:"profile",component:ProfileComponent}]},
  {path:"admin", component:AdminComponent,children:[{path:"home",component:HomeComponent}]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
