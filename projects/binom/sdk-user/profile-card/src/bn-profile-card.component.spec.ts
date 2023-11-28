import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnProfileCardComponent } from './bn-profile-card.component';

describe('BnProfileCardComponent', () => {
  let component: BnProfileCardComponent;
  let fixture: ComponentFixture<BnProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnProfileCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
