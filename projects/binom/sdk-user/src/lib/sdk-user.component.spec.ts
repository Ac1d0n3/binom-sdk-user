import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkUserComponent } from './sdk-user.component';

describe('SdkUserComponent', () => {
  let component: SdkUserComponent;
  let fixture: ComponentFixture<SdkUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
