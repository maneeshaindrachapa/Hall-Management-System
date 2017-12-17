import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from "../../../../services/login.service";
import { Router } from "@angular/router";
import { posix } from 'path';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  hall_type:string;
  monthly_fee:number;
  searchResult:Search;
  error:boolean=false;
  error_message:string="";
  searchif:boolean=false;
  indexno:string;

  titleAlert:string = 'This Field is Required';

  constructor(private loginService:LoginService, private router:Router, private formBuilder:FormBuilder) {
    this.indexno=this.loginService.getIndex();
    this.hall_type="male";
    this.monthly_fee=1000;
    this.searchForm=formBuilder.group({
        "hall_type":[null, Validators.required],
        "monthly_fee":[null,Validators.required]
    });
}

ngOnInit() {
}


goBack(){
    this.router.navigate(["user/profile"]);
}

search(post){
  this.searchif=!this.searchif;
  this.hall_type=post.hall_type;
  this.monthly_fee=post.monthly_fee;

  this.loginService.search(this.hall_type,this.monthly_fee).subscribe(searchResult=>{
    this.searchResult=searchResult;
    console.log(searchResult);
  });
}

requestroom(search){
  console.log(search.hall_id);
  this.loginService.requestroom(this.indexno,search.hall_id,search.room_no).subscribe(res=>{
    console.log("approved");
  });
  
}

}

interface Search{
  hall_id:number,
  room_no:number,
  hall_name:string,
  hall_type:number,
  monthly_fee:number,  
  room_type:string,
  room_capacity:number,
  free_beds:number
}