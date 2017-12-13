import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../../../services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  requests:Request[];
   
  constructor(private loginService:LoginService, private router:Router) { 
    this.getrequests();  
  }

  ngOnInit() {
  }
  getrequests(){
    this.loginService.getRequests().subscribe(requests=>{
      this.requests=requests;
    });
  }

  logout(){
    window.localStorage.removeItem('auth-key');
    this.router.navigate([""]);
  }

  addUser(){
    this.router.navigate(["admin/adduser"]);
  }

  requestApprove(request){
    console.log(request.req_id);
    this.loginService.requestApprove(request.req_id,request.hall_id,request.room_no,request.free_beds,request.indexno).subscribe(res=>{
      this.getrequests();
      console.log("approved");
    });
    
  }

  requestIgnore(request){
    this.loginService.requestIgnore(request.req_id).subscribe(res=>{
      console.log("Ignored");
    });
  }
}

interface Request{
    req_id:number,
    indexno:string,
    dept_name:string;
    year:number,
    hall_id:number,
    hall_name:string,
    room_no:number,
    room_type:string,
    room_capacity:number,
    free_beds:number
}