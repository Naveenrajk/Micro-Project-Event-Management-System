import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';


import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './service/api.service';
import { RegisterService } from './service/register.service';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { EventsComponent } from './events/events.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { ParticipantComponent } from './participant/participant.component';
import { ParticipantlistComponent } from './participantlist/participantlist.component';
import { GuestComponent } from './guest/guest.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DialogComponent,
    EventsComponent,
    EventlistComponent,
    ParticipantComponent,
    ParticipantlistComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatToolbarModule, MatIconModule, 
    MatSelectModule,MatButtonModule, MatDialogModule, 
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
    HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule],
  providers: [ApiService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
