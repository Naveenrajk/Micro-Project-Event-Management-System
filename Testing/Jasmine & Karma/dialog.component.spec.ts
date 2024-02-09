import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data1Service } from '../service/data1.service';
import { ApiService } from '../service/api.service';
import { DataService } from '../service/data.service';
import { LoginService } from '../service/login.service';
import { RegisterService } from '../service/register.service';
import { EventsComponent } from '../events/events.component';
import { AppComponent } from '../app.component';
import { EventlistComponent } from '../eventlist/eventlist.component';
import { GuestComponent } from '../guest/guest.component';
import { LoginComponent } from '../login/login.component';
import { ParticipantComponent } from '../participant/participant.component';
import { ParticipantlistComponent } from '../participantlist/participantlist.component';
import { RegisterComponent } from '../register/register.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent,AppComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        EventlistComponent,
        ParticipantComponent,
        ParticipantlistComponent,
        GuestComponent],
      imports:[BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, MatToolbarModule, MatIconModule, 
        MatSelectModule,MatButtonModule, MatDialogModule, 
        MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
        HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, HttpClientTestingModule],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          Data1Service,ApiService,DataService,LoginService,RegisterService
      ]
    });
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'Dialog Component'`, () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dialog Component');
  });

  it('Insert Event Component Test', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Event = fixture.componentInstance;
    expect(Event).toBeTruthy();
  });

  it('Insert Event Form GUI count', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#eventForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });

  
  

  it('Testing Insert Event Form valid', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Event = fixture.componentInstance;
    Event.eventForm.controls?.['eventId'].setValue("201");
    Event.eventForm.controls?.['eventName'].setValue("Valan Conference");
    Event.eventForm.controls?.['eventType'].setValue("Business");
    Event.eventForm.controls?.['eventDate'].setValue("2024-02-13T18:30:00.000Z");
    Event.eventForm.controls?.['eventTime'].setValue("10.00 AM");
    Event.eventForm.controls?.['eventVenue'].setValue("Bangalore");
    Event.eventForm.controls?.['email'].setValue("valan@gmail.com");
    expect(Event.eventForm.valid).toBeTruthy();
  });

  it('Testing Update Event Form valid', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Event = fixture.componentInstance;
    Event.eventForm.controls?.['eventId'].setValue("201");
    Event.eventForm.controls?.['eventName'].setValue("Valan Conference");
    Event.eventForm.controls?.['eventType'].setValue("Business");
    Event.eventForm.controls?.['eventDate'].setValue("2024-02-13T18:30:00.000Z");
    Event.eventForm.controls?.['eventTime'].setValue("10.00 AM");
    Event.eventForm.controls?.['eventVenue'].setValue("Bangalore");
    Event.eventForm.controls?.['email'].setValue("valan@gmail.com");
    expect(Event.eventForm.valid).toBeTruthy();
  });



  it('Insert Event Form Button GUI count', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#eventForm");
    const inputElements = formElement.querySelectorAll("mat-option");
    expect(inputElements.length).toEqual(0);
  });

  

});


