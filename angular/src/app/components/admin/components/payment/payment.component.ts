import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from "../../../../services/login.service";
import { AdminService } from "../../../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup;
  indexno:string;
  price:number;
  error:boolean=false;
  error_message:string="";

  titleAlert:string = 'This Field is Required';

  constructor(private adminService:AdminService,private loginService:LoginService, private router:Router, private formBuilder:FormBuilder) {
    this.indexno="";
    this.price=500;
    
    this.paymentForm=formBuilder.group({
        "indexno":[null, Validators.required],
        "price":[null,Validators.required],
    });
}

ngOnInit() {
}

payment(post){
    this.indexno=post.indexno;
    this.price=post.price;
    this.adminService.payment(this.indexno,this.price).subscribe(
        res=>{
          this.error=true;
          this.error_message="Payment Successful";
          console.log(res);
        },
        error=>{
          this.error=true;
          this.error_message="There is an Error in the data You Input";
          console.log(this.error_message);
        }
    );
}

  goBack(){
      this.router.navigate(["admin/home"]);
  }
  userdetails(){
    this.router.navigate(["admin/userDetails"]);
  }

}
