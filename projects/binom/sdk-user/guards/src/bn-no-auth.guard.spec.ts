import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bnNoAuthGuard } from './bn-no-auth.guard';

describe('bnNoAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bnNoAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
