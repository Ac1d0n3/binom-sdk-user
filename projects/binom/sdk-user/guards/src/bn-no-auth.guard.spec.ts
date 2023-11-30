

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BnUserStateService } from '@binom/sdk-user/core';
import { bnAuthGuard } from './bn-auth.guard'; // Passe den Pfad entsprechend an

import { bnNoAuthGuard } from './bn-no-auth.guard';

describe('bnNoAuthGuard', () => {
  let router: Router;
  let authSvc: BnUserStateService;
  let routeSnapshot: ActivatedRouteSnapshot;
  let routerStateSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [BnUserStateService]
    });

    router = TestBed.inject(Router);
    authSvc = TestBed.inject(BnUserStateService);

    // Erzeuge Beispieldaten für route und state
    routeSnapshot = {} as ActivatedRouteSnapshot;
    routerStateSnapshot = {} as RouterStateSnapshot;
  });

  it('should create guard', () => {
    const guard = bnAuthGuard('/login');
    expect(guard).toBeTruthy();
  });

  it('should allow activation if user is not authenticated', () => {
    spyOn(authSvc, 'isAuthenticated').and.returnValue(false);

    const guard = bnAuthGuard('/login');
    const canActivate = guard(routeSnapshot, routerStateSnapshot);

    expect(canActivate).toBe(true);
  });

  it('should create UrlTree to redirect if user is not authenticated', () => {
    spyOn(authSvc, 'isAuthenticated').and.returnValue(false);
    spyOn(router, 'createUrlTree').and.returnValue(new UrlTree()); // Erzeuge eine leere UrlTree-Instanz

    const guard = bnAuthGuard('/login');
    const canActivate = guard(routeSnapshot, routerStateSnapshot);

    expect(canActivate instanceof UrlTree).toBe(true);
  });
});