import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bnAuthGuard } from './bn-auth.guard';

describe('bnAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bnAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
