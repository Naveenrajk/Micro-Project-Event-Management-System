import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../model/participant';


@Injectable({
  providedIn: 'root'
})
export class DataService {

   //private url: string = "http://localhost:3000/posts";
   private url : string = "http://localhost:1234";


   constructor(private http: HttpClient) { }
   insert(participant: Participant) {
     //this.http.post(this.url, vehicle).subscribe();
     this.http.post(this.url+"/performParticipantInsert", participant).subscribe();
     return "Your response has been Recorded!"
   }
   /*update(participant: Participant) {
     //this.http.put(this.url + "/" + vehicle.id, vehicle).subscribe();
     this.http.put(this.url + "/PerformUpdate", participant).subscribe();
     return "Record updated"
   }
 
 
   delete(participant: Participant) {
     //this.http.delete(this.url + "/" + vehicle.id).subscribe();
     this.http.delete(this.url + "/PerformDelete/" + participant.email).subscribe();
     return "Record Deleted"
   }*/
   getAlldetails() {
     return this.http.get<Participant[]>(this.url+"/viewAllParticipants");
   }

}
