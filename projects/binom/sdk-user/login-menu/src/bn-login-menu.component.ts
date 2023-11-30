import { Component, OnInit, Input, OnDestroy,HostBinding } from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BnUserStateService,BnUserObject, BnAuthDirective, } from '@binom/sdk-user/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'bn-login-menu',
  standalone: true,
  imports: [CommonModule,TranslateModule,MatButtonModule,MatMenuModule,MatTooltipModule, BnAuthDirective],
  templateUrl: './bn-login-menu.component.html',
  styleUrl: './bn-login-menu.component.css'
})
export class BnLoginMenuComponent implements OnInit, OnDestroy {

  constructor(
    private userStateService: BnUserStateService,
    private route: ActivatedRoute,
    public router: Router,
    private translate: TranslateService
   ) { }

  sub$!: Subscription;
  isAuthenticated:boolean = false;
  user!:BnUserObject;
  @HostBinding('class.button-component-fix') addClass: boolean = true;
  @Input() tooltip: boolean = false;
  @Input() small: boolean = false;
  @Input() signInRoute: string = '/sign/in';
  @Input() signOutRoute: string = '/sign/out';
  @Input() signUpRoute: string = '/sign/up';
  @Input() profileRoute: string = '/profile';

  ngOnInit(): void {
    this.sub$ = this.userStateService.isAuthenticated$.subscribe((isAuthenticated:boolean)=>{
      this.isAuthenticated = isAuthenticated;
      this.user = this.userStateService.getUserObject();
    });
  }

  signOut(){
    this.router.navigate([this.signOutRoute])
  }
  signIn(){
    console.log(this.signInRoute)
    this.router.navigate([this.signInRoute])
  }
  signUp(){
    this.router.navigate([this.signUpRoute])
  }
  profile(){
    this.router.navigate([this.profileRoute])
  }

  ngOnDestroy() {
    if(this.sub$)this.sub$.unsubscribe()
  }

}
