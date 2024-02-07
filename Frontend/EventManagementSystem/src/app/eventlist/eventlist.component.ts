import { Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {
  title = 'EventManagementSystem';

  displayedColumns: string[] = ['eventId','eventName', 'eventType', 'eventDate', 'eventTime', 'eventVenue', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  temp:boolean=false;
  constructor(private api : ApiService, private router : Router){

  }
  ngOnInit():void{
    this.getAllEvents();
  }
  
  getAllEvents(){
    this.api.getEvent()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  route(){
    this.router.navigate(['/participant'])
  }

  routeLog(){
    this.temp=!this.temp;
    this.router.navigate([''])
  }
}
