import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{

eventForm !: FormGroup;
actionBtn : string = "Save";

constructor(private formBuilder : FormBuilder, 
  private api : ApiService, 
  @Inject(MAT_DIALOG_DATA) public editData : any, 
  private dialogRef : MatDialogRef<DialogComponent>){ 


this.eventForm = this.formBuilder.group({
    eventId:['',Validators.required],
    eventName:['',Validators.required],
    eventType : ['', Validators.required],
    eventDate : ['', Validators.required],
    eventTime : ['', Validators.required],
    eventVenue : ['', Validators.required],
    email : ['', Validators.required]
  });

  if(this.editData){
    this.actionBtn = "Update";
    this.eventForm.controls['eventId'].setValue(this.editData.eventId);
    this.eventForm.controls['eventName'].setValue(this.editData.eventName);
    this.eventForm.controls['eventType'].setValue(this.editData.eventType);
    this.eventForm.controls['eventDate'].setValue(this.editData.eventDate);
    this.eventForm.controls['eventTime'].setValue(this.editData.eventTime);
    this.eventForm.controls['eventVenue'].setValue(this.editData.eventVenue);
    this.eventForm.controls['email'].setValue(this.editData.email);
  }
}
addEvent(){
  if(!this.editData){
    if(this.eventForm.valid){
      this.api.postEvent(this.eventForm.value)
      .subscribe({
        next:(res) => {
          alert("Event added successfully")
          this.eventForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the Event")
        }
      })
    }}else{
      this.updateEvent()
    }
  }
  updateEvent(){
    this.api.putEvent(this.eventForm.value, this.editData.id)
    .subscribe({
      next :(res)=>{
        alert("Event updated Successfully");
        this.eventForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>
      {
        alert("error while updating the record!!");
      }
    })
  }
}


