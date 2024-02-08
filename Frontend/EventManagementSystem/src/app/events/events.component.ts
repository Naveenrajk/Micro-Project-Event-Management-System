import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';


import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})


export class EventsComponent implements OnInit {
  title = 'EventManagementSystem';

  displayedColumns: string[] = ['eventId','eventName', 'eventType', 'eventDate', 'eventTime', 'eventVenue', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  temp:boolean=false;

  constructor(private dialog : MatDialog, private api : ApiService, private router : Router){

  }
  ngOnInit():void{
    this.getAllEvents();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'save'){
          this.getAllEvents();
        }
      })
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
  editEvent(row : any){
    this.dialog.open(DialogComponent,{
      width : '30%', 
      data:row
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'update'){
          this.getAllEvents();
        }
      }) 
  }

  deleteEvent(data:any){
    this.api.deleteEvent(data)
    .subscribe({
      next:(res)=>{
        alert("Event Deleted Successfully");
        this.getAllEvents();
      },
      error:()=>{
        alert('Unable to Delete Product');
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
    this.router.navigate(['/participantlist'])
  }
  routeLog(){
    this.temp=!this.temp;
    this.router.navigate([''])
  }
}
