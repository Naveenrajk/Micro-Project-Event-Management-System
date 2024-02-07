import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventsComponent } from './events/events.component';
import { ParticipantComponent } from './participant/participant.component';
import { ParticipantlistComponent } from './participantlist/participantlist.component';
import { GuestComponent } from './guest/guest.component';
import { AppComponent } from './app.component';




const routes: Routes = [
  {path :'Register',component:RegisterComponent},
  {path :'Login',component:LoginComponent},
  {path :'EventList', component:EventlistComponent},
  {path :'Events', component:EventsComponent},
  {path :'participant', component:ParticipantComponent},
  {path :'participantlist', component:ParticipantlistComponent},
  {path :'Guest', component:GuestComponent},
  {path :'', component:AppComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
