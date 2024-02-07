import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  private url: string = 'http://localhost:1234';

  postEvent(data : any):Observable<any>{
    //return this.http.post<any>("http://localhost:3000/productList/", data);
    return this.http.post<any>("http://localhost:1234/performEventInsert", data);
  }

  getEvent():Observable<any>{
    //return  this.http.get<any>("http://localhost:3000/productList/");
    return  this.http.get<[any[]]>("http://localhost:1234/viewAllEvents");
  }
  putEvent(data : any, id : number):Observable<any>{
    //return   this.http.put<any>("http://localhost:3000/productList/"+id , data );
    return   this.http.put<any>("http://localhost:1234/performEventUpdate", data );
  }
  /* deleteProduct(id:number):Observable<any>{
    //return    this.http.delete<any>("http://localhost:3000/productList/" + id ) ;
    return    this.http.delete<any>("http://localhost:1234/PerformDelete" + id ) ;
  } */

  deleteEvent(data : any):Observable<any>{
    return this.http.delete(this.url+"/performEventDelete/"+data.eventId);
  }
}
