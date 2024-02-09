import { ComponentFixture, TestBed } from '@angular/core/testing';


import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { EventsComponent } from '../events/events.component';
import { GuestComponent } from '../guest/guest.component';
import { LoginComponent } from '../login/login.component';
import { ParticipantComponent } from '../participant/participant.component';
import { ParticipantlistComponent } from '../participantlist/participantlist.component';
import { RegisterComponent } from '../register/register.component';
import { EventlistComponent } from '../eventlist/eventlist.component';

describe('ParticipantComponent', () => {
  let component: ParticipantComponent;
  let fixture: ComponentFixture<ParticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventlistComponent,AppComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        ParticipantComponent,
        ParticipantlistComponent,
        GuestComponent
      ],
      imports:[BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, MatToolbarModule, MatIconModule, 
        MatSelectModule,MatButtonModule, MatDialogModule, 
        MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
        HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'Participant Component'`, () => {
    const fixture = TestBed.createComponent(ParticipantComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Participant Component');
  });

  it('Testing Participant Component', () => {
    const fixture = TestBed.createComponent(ParticipantComponent);
    const Event = fixture.componentInstance;
    expect(Event).toBeTruthy();
  });

  it('Participant Form GUI count', () => {
    const fixture = TestBed.createComponent(ParticipantComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#pForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(4);
  });

  it('Participant Component Button GUI count', () => {
    const fixture = TestBed.createComponent(ParticipantComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#pForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });

});

