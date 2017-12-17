import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminService } from "../../../../services/admin.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  users:User[];
  constructor(private router:Router,private adminService:AdminService) {
    this.getUserDetails();
   }

  ngOnInit() {
  }

  getUserDetails(){
    this.adminService.getUserDetails().subscribe(users=>{
      this.users=users;
    });
  }

  goBack(){
    this.router.navigate(["admin/payment"]);
  }
}

interface User{
  indexno:string,
  dept_name:string;
  year:number,
  hall_id:number,
  hall_name:string,
  room_no:number,
  monthly_fee:string,
  due_price:number
}