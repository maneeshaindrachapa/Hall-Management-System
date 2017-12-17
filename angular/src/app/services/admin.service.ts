import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class AdminService {

  constructor(private http:Http) { }

  signup(indexno,password,firstname,lastname,type){
    return this.http.post("http://localhost/Hall-Management-System/api/signup.php",{"indexno":indexno,"password":password,"firstname":firstname,"lastname":lastname,"type":type}).map(res=>res.json());
  }
  getRequests(){
    return this.http.get("http://localhost/Hall-Management-System/api/requests.php").map(res=>res.json());
  }
  requestApprove(req_id,hall_id,room_no,free_beds,indexno){
    return this.http.post("http://localhost/Hall-Management-System/api/reqApprove.php",{"req_id":req_id,"hall_id":hall_id,"room_no":room_no,"free_beds":free_beds,"indexno":indexno}).map(res=>res.json());
  }
  requestIgnore(req_id){
    return this.http.post("http://localhost/Hall-Management-System/api/reqIgnore.php",{"req_id":req_id}).map(res=>res.json());
  }
  payment(indexno,price){
    return this.http.post("http://localhost/Hall-Management-System/api/payment.php",{"indexno":indexno,"price":price}).map(res=>res.json());
  }
  getUserDetails(){
    return this.http.get("http://localhost/Hall-Management-System/api/userDetails.php").map(res=>res.json());
  }
}

