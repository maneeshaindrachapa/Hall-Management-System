import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";


@Injectable()
export class UserService {

  constructor(private http:Http) { }

  search(hall_type,price){
    return this.http.post("http://localhost/Hall-Management-System/api/search.php",{"hall_type":hall_type,"price":price}).map(res=>res.json());
  }
  requestroom(indexno,hall_id,room_no){
    return this.http.post("http://localhost/Hall-Management-System/api/requestRoom.php",{"indexno":indexno,"hall_id":hall_id,"room_no":room_no}).map(res=>res.json());
  }

}
