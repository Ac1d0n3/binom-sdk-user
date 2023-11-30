import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateLoginLogoutComponent } from './simulate-login-logout.component';

describe('SimulateLoginLogoutComponent', () => {
  let component: SimulateLoginLogoutComponent;
  let fixture: ComponentFixture<SimulateLoginLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulateLoginLogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimulateLoginLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
