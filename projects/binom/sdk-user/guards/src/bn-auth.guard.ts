import { CanActivateFn } from '@angular/router';

export const bnAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
