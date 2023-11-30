import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardDemoComponent } from './guard-demo.component';

describe('GuardDemoComponent', () => {
  let component: GuardDemoComponent;
  let fixture: ComponentFixture<GuardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
