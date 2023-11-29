import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BnUserStateService } from '@binom/sdk-user/core';

export function bnNoAuthGuard(
  redirectRoute: string
): CanActivateFn {
  return () => {
    const authSvc: BnUserStateService = inject(BnUserStateService);
    const router: Router = inject(Router);
    return !authSvc.isAuthenticated() || router.createUrlTree([redirectRoute]);
  };
}