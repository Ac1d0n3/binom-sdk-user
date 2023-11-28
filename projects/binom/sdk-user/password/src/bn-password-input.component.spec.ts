import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPasswordInputComponent } from './bn-password-input.component';

describe('BnPasswordInputComponent', () => {
  let component: BnPasswordInputComponent;
  let fixture: ComponentFixture<BnPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnPasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
