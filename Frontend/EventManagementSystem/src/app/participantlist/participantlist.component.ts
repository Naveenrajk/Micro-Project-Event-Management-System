import { Component } from '@angular/core';
import { Participant } from '../model/participant';
import { Data1Service } from '../service/data1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participantlist',
  templateUrl: './participantlist.component.html',
  styleUrls: ['./participantlist.component.css']
})
export class ParticipantlistComponent {

  [x: string]: any;
  title = 'Participantslist';
  participant: Participant;
  result: string = "";
  parList: Participant[] = [];
  temp:boolean=false;
  
  
  flag: boolean = false;
  constructor(private service: Data1Service, private router : Router) {
    this.participant = new Participant();
    this.getAllDetails();
  }
  changeDiv() {
    this.flag =!this.flag;
  }

  insertP(data: any) {
    this.participant.email = data.email;
    this.participant.eventName = data.eventName;
    this.participant.availability = data.availability;
    alert( this.result = this.service.insertP(this.participant));
    this.getAllDetails();


  }
  updateP(data: any) {
    this.participant.email = data.email;
    this.participant.eventName = data.eventName;
    this.participant.availability = data.availability;
    alert( this.result = this.service.updateP(this.participant));
    this.getAllDetails();


  }
  deleteP(data: any) {
    this.participant.email = data.email;
    alert(this.result = this.service.deleteP(this.participant));
    this.getAllDetails();


  }


  getAllDetails() {
    this.service.getAlldetails().subscribe(ans => this.parList = ans );


  }
  routeLog(){
    this.temp=!this.temp;
    this.router.navigate([''])
  }
}
