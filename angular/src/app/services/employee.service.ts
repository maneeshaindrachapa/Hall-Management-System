import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {LoginService} from './login.service';


@Injectable()
export class EmployeeService {
  indexNo:string;
  constructor(private loginservice:LoginService,private http:Http) {
    this.indexNo= this.loginservice.getIndex();
   }

  getDetails(){
    return this.http.post("http://localhost/Hall-Management-System/api/employee.php",{"indexNo":this.indexNo}).map(res=>res.json());
  }

  employeeAssign(){
    
  }

}
