import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  result:any;
 
  private url:string="http://localhost:1234";




  constructor(private http:HttpClient) { }



  login(User:any) {
    return this.http.post(this.url+"/login",User);
  }


}
