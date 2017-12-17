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
  setIndex(index_signin){
    this.indexNo=index_signin;
  }
  getIndex(){
    return this.indexNo;
  }
  updateDetails(indexNo,firstname,lastname,password){
    return this.http.post("http://localhost/Hall-Management-System/api/update.php",{"indexno":indexNo,"firstname":firstname,"lastname":lastname,"password":password}).map(res=>res.json());
  }
  search(hall_type,price){
    return this.http.post("http://localhost/Hall-Management-System/api/search.php",{"hall_type":hall_type,"price":price}).map(res=>res.json());
  }
  requestroom(indexno,hall_id,room_no){
    return this.http.post("http://localhost/Hall-Management-System/api/requestRoom.php",{"indexno":indexno,"hall_id":hall_id,"room_no":room_no}).map(res=>res.json());
  }
  private _errorHandler(error:Response){
    console.error("Error Occured:"+error);
    return Observable.throw(error||"Some error occured in Server");
  }
}
