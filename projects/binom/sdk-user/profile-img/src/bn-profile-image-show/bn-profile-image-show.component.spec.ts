import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnProfileImageShowComponent } from './bn-profile-image-show.component';

describe('BnProfileImageShowComponent', () => {
  let component: BnProfileImageShowComponent;
  let fixture: ComponentFixture<BnProfileImageShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnProfileImageShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnProfileImageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
