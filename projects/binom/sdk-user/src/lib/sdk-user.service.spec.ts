import { TestBed } from '@angular/core/testing';

import { SdkUserService } from './sdk-user.service';

describe('SdkUserService', () => {
  let service: SdkUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
