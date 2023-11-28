import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnUserSelectComponent } from './bn-user-select.component';

describe('BnUserSelectComponent', () => {
  let component: BnUserSelectComponent;
  let fixture: ComponentFixture<BnUserSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnUserSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnUserSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
