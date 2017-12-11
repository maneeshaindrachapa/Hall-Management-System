import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../../../services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hallDetails:{ 
    hall_id:number,
    hall_name:string,
    room_no:number,
    room_type:string,
    room_capacity:number,
};     
  constructor(private loginService:LoginService, private router:Router) { 
    this.loginService.getHalls().subscribe(hallDetails=>{
      this.hallDetails=hallDetails;
    });
  }

  ngOnInit() {
  }
  
  logout(){
    window.localStorage.removeItem('auth-key');
    this.router.navigate([""]);
  }
  addUser(){
    this.router.navigate(["admin/adduser"]);
  }
}
