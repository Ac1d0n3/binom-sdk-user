import { CanActivateFn } from '@angular/router';

export const bnNoAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
