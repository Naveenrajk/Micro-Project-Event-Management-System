import { Component, NgModule } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, RouterModule, Routes } from '@angular/router';


import { User } from '../model/user';
import { RegisterService } from '../service/register.service';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {


  user:User;
  myform:FormGroup;
  flag:boolean=false;
 
  constructor(private service:LoginService,private router:Router) {


    this.myform = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.pattern('')]),
        password:new FormControl('',[Validators.required,Validators.pattern('')]),
      }
    );
 
     this.user=new User();
  }




  login (data:any){
   this.user.email=data.email;
   this.user.password=data.password;


  this.service.login(this.user).subscribe(
    (resultdata:any)=> {
      console.log(resultdata)


      if(resultdata.message=="Admin Success"){
         this.router.navigate(['/Events']);
      } else if(resultdata.message=="User Success"){
        this.router.navigate(['/EventList']);
      }
      else{
        alert("Invalid User");
      }
    }
   );
  }


  changediv(){
    this.flag=!this.flag;
  }

  route(){
    this.router.navigate(['/Register'])
  }


}
