import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url:string="http://localhost:1234"


  constructor(private http:HttpClient) { }


  insert(user:User)
  {
    this.http.post(this.url+"/Register",user).subscribe();
    return "Your Registration is Successful!";



  }
} 
