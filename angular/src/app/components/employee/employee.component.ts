import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { EmployeeService } from "../../services/employee.service";
import { LoginService } from "../../services/login.service";
import { $ } from 'protractor';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  details:{
    firstname:string,
    lastname:string,
    salary:string,
    hall_name:string,
    position:string,
    hours_per_week:string,
    password:string
  };
  re_enter_password:string;
  editDetails:boolean=false;
  errorMessage:string="";
  error:boolean=false;
  successMessage:string="";
  success:boolean=false;
  today:Date;
  hour:number;
  greet:string;
  greetIcon:string;
  greetColor:string;

  
  constructor(private router:Router,private employeeservice:EmployeeService,private loginservice:LoginService) {
    this.employeeservice.getDetails().subscribe(data=>{
      this.details = data;
    });
  
   }

  ngOnInit() {
    this.today = new Date();
    this.greet = this.greeting();
  }

  toggleEdit(){
    this.editDetails=!this.editDetails;
    console.log(this.details.hours_per_week);    
  }
  
  logout(){
    window.localStorage.removeItem('auth-key');
    this.router.navigate([""]);
  }

  changeDetails(details,re_enter_password){
    if(this.details.password!=this.re_enter_password){
      this.error=!this.error;
      this.errorMessage="Password Does not Match";
    }else{
      this.loginservice.updateDetails(this.employeeservice.indexNo,this.details.firstname,this.details.lastname,this.details.password).subscribe(success=>{
        this.success=!this.success;
        this.error=false;
        this.successMessage="Profile Updated";
      },
      error=>{
        this.error=!this.error;
        this.errorMessage="Unexpected Error Occured";
      });
    }
  
  }

  greeting(){
    this.hour = this.today.getHours();
    if(this.hour>=0 && this.hour<12){
      this.greetIcon = "fa fa-sun-o";
      this.greetColor = "#f2c10e";
      return "Good Morning !";
    }else if(this.hour>=12 && this.hour<16){
      this.greetIcon = "fa fa-sun-o";
      this.greetColor = "#ff3700";
        return "Good Afternoon !"
    }else if(this.hour>=16 && this.hour<19){
      this.greetIcon = "fa fa-sun-o";
      this.greetColor = "#d6b948";
      return "Good Evening !"
  }else if(this.hour>=19 && this.hour<=23){
    this.greetIcon = "fa fa-moon-o";
    return "Good Night !"
}
  }

}

interface Data{
  indexno:string,
  firstname:string;
  lastname:string;
} 

