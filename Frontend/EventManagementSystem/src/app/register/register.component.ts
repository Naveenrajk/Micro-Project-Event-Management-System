import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { User } from '../model/user';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  user:User;
  myform:FormGroup;
  result:string=" ";
 
  constructor(private service:RegisterService, private router : Router) {


   
    this.myform = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.pattern('')]),
        password:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z0-9.@_]+')]),
       


      }
    );
 
     this.user=new User();


  }


  insert (data:any){
   this.user.email=data.email;
   this.user.password=data.password;
   alert(this.result=this.service.insert(this.user));


  }


  route(){
    this.router.navigate(['/Login'])
  }



}
