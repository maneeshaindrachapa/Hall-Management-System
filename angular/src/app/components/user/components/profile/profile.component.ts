import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../../../services/login.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  index_signin:string;
  details:{ firstname:string,
            lastname:string,
            dept_name:string,
            year:number,
            hall_id:number,
            room_id:number,
            password:string};
  re_enter_password:string;
  editDetails:boolean=false;
  errorMessage:string="";
  error:boolean=false;
  successMessage:string="";
  success:boolean=false;

  constructor(private loginService:LoginService, private router:Router) {
    this.index_signin=loginService.getIndex();
    this.details={
      firstname:"",
      lastname:"",
      dept_name:"",
      year:null,
      hall_id:null,
      room_id:null,
      password:""  
    }
    this.loginService.getDetails().subscribe(details=>{
      this.details.firstname=(details.firstname);
      this.details.lastname=details.lastname;
      this.details.dept_name=details.dept_name;
      this.details.year=details.year;
      this.details.hall_id=details.hall_id;
      this.details.room_id=details.room_id;
      this.details.password=details.password;
    });
    console.log(this.index_signin);
    
   }

  ngOnInit() {
  }
  
  toggleEdit(){
    this.editDetails=!this.editDetails;
  }
  
  logout(){
    this.router.navigate([""]);
  }

  changeDetails(details,re_enter_password){
    if(this.details.password!=this.re_enter_password){
      console.log(this.details.password);
      console.log(this.re_enter_password);
      this.error=!this.error;
      this.errorMessage="Password Does not Match";
    }else{
      this.loginService.updateDetails(this.index_signin,this.details.firstname,this.details.lastname,this.details.password).subscribe(success=>{
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
}
