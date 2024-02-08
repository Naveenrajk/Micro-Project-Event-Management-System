import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantlistComponent } from './participantlist.component';

describe('ParticipantlistComponent', () => {
  let component: ParticipantlistComponent;
  let fixture: ComponentFixture<ParticipantlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantlistComponent]
    });
    fixture = TestBed.createComponent(ParticipantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
