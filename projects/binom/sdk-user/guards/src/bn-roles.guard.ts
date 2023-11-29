
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BnRolesAccessObject, BnUserStateService } from '@binom/sdk-user/core';

export function bnRolesGuard(
  module:string,
  operation:string,
  roleCheck: string,
  redirectRoute: string,
): CanActivateFn {
  return () => {
    const authSvc: BnUserStateService = inject(BnUserStateService);
    const router: Router = inject(Router);
    const roleAccess = authSvc.getUserRoles();
    if( roleAccess.length === 0 || ! roleAccess ){ return false }
    if(module === undefined || module === null) module =  window.location.pathname.split('/')[1]
    let cur = roleAccess.filter((obj:any) => obj.module == module  && (obj.operation == operation || obj.operation == 'admin'));
    if(module === 'core') { cur = roleAccess.filter((obj:any) => obj.operation == 'admin'); }
    let found = false;
    if(cur.length > 0){
      for(let i = 0; i < cur.length; i++){
        if(roleCheck){ 
          if (cur[i][roleCheck as keyof BnRolesAccessObject] == true ) { 
            found = true; break; 
        } } 
        else { 
          if (cur[i].readAny == true ) { 
            found = true; break; 
        } }
      }
    }

    if(!found){ return router.createUrlTree([redirectRoute]);  } 
    else return true

  };
}