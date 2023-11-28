import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnProfileImageComponent } from './bn-profile-image.component';

describe('BnProfileImageComponent', () => {
  let component: BnProfileImageComponent;
  let fixture: ComponentFixture<BnProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnProfileImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
