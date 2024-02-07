import { Component } from '@angular/core';
import { Participant } from '../model/participant';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {

  [x: string]: any;
  title = 'Participants';
  participant: Participant;
  result: string = "";
  parList: Participant[] = [];
  
  
  flag: boolean = false;
  constructor(private service: DataService, private router : Router) {
    this.participant = new Participant();
    this.getAllDetails();
  }
  changeDiv() {
    this.flag =!this.flag;
  }

  insert(data: any) {
    this.participant.email = data.email;
    this.participant.eventName = data.eventName;
    this.participant.availability = data.availability;
    alert( this.result = this.service.insert(this.participant));
    this.getAllDetails();


  }
  /*update(data: any) {
    this.flight.flightno = data.flightno;
    this.flight.flighttype = data.flighttype;
    this.flight.source = data.source;
    this.flight.destination = data.destination;
    this.flight.economyseatcount = data.economyseatcount;
    this.flight.businessseatcount = data.businessseatcount;
    this.flight.economyfare = data.economyfare;
    this.flight.businessfare = data.businessfare;
    alert( this.result = this.service.update(this.flight));
    this.getAllDetails();


  }
  delete(data: any) {
    this.flight.flightno = data.flightno;
    alert(this.result = this.service.delete(this.flight));
    this.getAllDetails();


  }*/


  getAllDetails() {
    this.service.getAlldetails().subscribe(ans => this.parList = ans );


  }
  routeLog(){
    this.router.navigate([''])
  }
}
