import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from "../../../../services/login.service";
import { UserService } from "../../../../services/user.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';

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

  constructor(private userService:UserService,private loginService:LoginService, private router:Router, private formBuilder:FormBuilder) {
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
  this.hall_type=post.hall_type;
  this.monthly_fee=post.monthly_fee;

  this.userService.search(this.hall_type,this.monthly_fee).subscribe(searchResult=>{
    if(searchResult.length >0){
      this.searchif=true;
      this.error=false;
      this.searchResult=searchResult;
      }else{
        this.searchif=false;
        this.error=true;
        this.error_message="No Search Results";
      } 
    console.log(searchResult);
  },error=>{
    this.searchif=false;
  });
}

requestroom(search){
  console.log(search.hall_id);
  this.userService.requestroom(this.indexno,search.hall_id,search.room_no).subscribe(res=>{
    console.log("approved");
    swal({
      position: 'top-right',
      type: 'success',
      title: 'Request Send Succefully',
      showConfirmButton: false,
      timer: 1500
    })
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