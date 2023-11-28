import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bnRolesGuard } from './bn-roles.guard';

describe('bnRolesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bnRolesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
