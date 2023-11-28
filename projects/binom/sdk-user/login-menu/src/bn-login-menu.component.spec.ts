import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnLoginMenuComponent } from './bn-login-menu.component';

describe('BnLoginMenuComponent', () => {
  let component: BnLoginMenuComponent;
  let fixture: ComponentFixture<BnLoginMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnLoginMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnLoginMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
