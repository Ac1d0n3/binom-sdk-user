import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BnUserStateService } from './bn-user-state.service';
import { BnRolesAccessObject } from './roles-access-object';
import { BnRoleAccessArray } from './role-access-object';

@Directive({
  selector: '[bnShowNotRoles]',
  standalone: true
})
export class BnNoRolesDirective  implements OnInit, OnDestroy {
  condition: any = '';
  sub$!: Subscription
  constructor(
    private templateRef: TemplateRef<any>,
    private userService: BnUserStateService,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.sub$ = this.userService.userRoles$.subscribe(
      (roleAccess:BnRolesAccessObject[]) => {
        let check = false;
        this.viewContainer.clear();
        if(roleAccess.length > 0 && this.condition.access){
          let cur = roleAccess.filter((obj:any) => obj.module == this.condition.access.module && obj.operation == this.condition.access.operation);
          if(this.condition.access.module === 'core') {
            cur = roleAccess.filter((obj:any) => obj.operation == this.condition.access.operation);
          }
          if(cur.length > 0){

            for(let i = 0; i < cur.length; i++){
              if (
                this.condition.access.action === 'create'  && cur[i].create == true ||
                this.condition.access.action === 'read' && cur[i].readAny == true ||
                this.condition.access.action === 'update' && cur[i].updateAny == true ||
                this.condition.access.action === 'delete' && cur[i].deleteAny == true ||
                (( this.condition.access.action === 'read' && cur[i].readOwn == true ||
                this.condition.access.action === 'update' && cur[i].updateOwn == true ||
                this.condition.access.action === 'delete' && cur[i].deleteOwn == true  )
                && this.userService.currentUserId == this.condition.ownedby )
              ) {
                check = true
                break;
              }
            }
          }
        }
        if(!check)  this.viewContainer.createEmbeddedView(this.templateRef);
      }
    );
  }

  ngOnDestroy() {
    if(this.sub$)this.sub$.unsubscribe()
  }

  @Input() set bnShowNotRoles(condition:  BnRoleAccessArray) {
    this.condition = condition;
  }
}