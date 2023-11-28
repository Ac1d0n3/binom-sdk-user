import { CanActivateFn } from '@angular/router';

export const bnRolesGuard: CanActivateFn = (route, state) => {
  return true;
};
