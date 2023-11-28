import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnUserListComponent } from './bn-user-list.component';

describe('BnUserListComponent', () => {
  let component: BnUserListComponent;
  let fixture: ComponentFixture<BnUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnUserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
