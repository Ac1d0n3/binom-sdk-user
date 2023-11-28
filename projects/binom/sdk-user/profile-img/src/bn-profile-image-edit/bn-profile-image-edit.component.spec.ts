import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnProfileImageEditComponent } from './bn-profile-image-edit.component';

describe('BnProfileImageEditComponent', () => {
  let component: BnProfileImageEditComponent;
  let fixture: ComponentFixture<BnProfileImageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnProfileImageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnProfileImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
