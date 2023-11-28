import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnUserAutocompleteComponent } from './bn-user-autocomplete.component';

describe('BnUserAutocompleteComponent', () => {
  let component: BnUserAutocompleteComponent;
  let fixture: ComponentFixture<BnUserAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnUserAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnUserAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
