import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../model/participant';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

 //private url: string = "http://localhost:3000/posts";
 private url : string = "http://localhost:1234";


 constructor(private http: HttpClient) { }
 insertP(participant: Participant) {
   //this.http.post(this.url, vehicle).subscribe();
   this.http.post(this.url+"/performParticipantInsert", participant).subscribe();
   return "Your response has been Recorded!"
 }
 updateP(participant: Participant) {
   //this.http.put(this.url + "/" + vehicle.id, vehicle).subscribe();
   this.http.put(this.url + "/performParticipantUpdate", participant).subscribe();
   return "Record updated"
 }


 deleteP(participant: Participant) {
   //this.http.delete(this.url + "/" + vehicle.id).subscribe();
   this.http.delete(this.url + "/performParticipantDelete/" + participant.email).subscribe();
   return "Record Deleted"
 }
 getAlldetails() {
   return this.http.get<Participant[]>(this.url+"/viewAllParticipants");
 }
}
