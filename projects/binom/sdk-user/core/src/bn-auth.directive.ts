import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { BnUserStateService } from './bn-user-state.service';
@Directive({
  selector: '[bnShowAuthed]',
  standalone: true
})
export class BnAuthDirective implements OnInit, OnDestroy {
  sub$!: Subscription;
  condition: boolean = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private userService: BnUserStateService,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.sub$ = this.userService.isAuthenticated$.subscribe(
      (isAuthenticated:boolean) => {
        this.viewContainer.clear();
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    );
  }

  ngOnDestroy() {
    if(this.sub$) this.sub$.unsubscribe()
  }

  @Input() set bnShowAuthed(condition: boolean) {
    this.condition = condition;
  }

}
