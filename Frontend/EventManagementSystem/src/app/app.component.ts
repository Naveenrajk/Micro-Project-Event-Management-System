import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventManagementSystem';

  flag:boolean=true;
  temp:boolean=false;
  constructor(private router : Router){}

  route(){
    this.flag=!this.flag;
    this.temp=!this.temp;
    this.router.navigate(['/Login'])
  }
  route1(){
    this.flag=!this.flag;
    this.temp=!this.temp;
    this.router.navigate(['/Register'])
  }
  routeGuest(){
    this.flag=!this.flag;
    this.temp=!this.temp;
    this.router.navigate(['/Guest'])
  }

}
