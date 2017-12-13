import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class LoginService {
  indexNo:string="";
  isloggedin:boolean=false;
  constructor(private http:Http) {
    console.log("connected Login");
   }

   setLoggedin(logged){
     this.isloggedin=logged;
   }
  login(index_signin,password_signin){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');

    return this.http.post("http://localhost/Hall-Management-System/api/login.php",{"index_signin":index_signin,"password_signin":password_signin}).map(res=>res.json());
  }
  getDetails(){
    return this.http.post("http://localhost/Hall-Management-System/api/user.php",{"indexNo":this.indexNo}).map(res=>res.json());
  }
  getRequests(){
    return this.http.get("http://localhost/Hall-Management-System/api/requests.php").map(res=>res.json());
  }
  setIndex(index_signin){
    this.indexNo=index_signin;
  }
  getIndex(){
    return this.indexNo;
  }
  updateDetails(indexNo,firstname,lastname,password){
    return this.http.post("http://localhost/Hall-Management-System/api/update.php",{"indexno":indexNo,"firstname":firstname,"lastname":lastname,"password":password}).map(res=>res.json());
  }
  signup(indexno,password,firstname,lastname,type){
    return this.http.post("http://localhost/Hall-Management-System/api/signup.php",{"indexno":indexno,"password":password,"firstname":firstname,"lastname":lastname,"type":type}).map(res=>res.json());
  }
  requestApprove(req_id,hall_id,room_no,free_beds,indexno){
    return this.http.post("http://localhost/Hall-Management-System/api/reqApprove.php",{"req_id":req_id,"hall_id":hall_id,"room_no":room_no,"free_beds":free_beds,"indexno":indexno}).map(res=>res.json());
  }
  requestIgnore(req_id){
    return this.http.post("http://localhost/Hall-Management-System/api/reqIgnore.php",{"req_id":req_id}).map(res=>res.json());
  }
  private _errorHandler(error:Response){
    console.error("Error Occured:"+error);
    return Observable.throw(error||"Some error occured in Server");
  }
}
