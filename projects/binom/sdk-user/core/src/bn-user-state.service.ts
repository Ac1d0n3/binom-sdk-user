import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { BnLoggerService, BnLogMsg, BnLogSource } from "@binom/sdk-core/logger";
import { BnUserObject } from './user-object';
import { BnRolesAccessObject } from './roles-access-object';

@Injectable({
  providedIn: 'root'
})
export class BnUserStateService { 
  protected logSource: BnLogSource = {
  module: 'BnUserStateService',
  source: 'svc'
  };
  private currentUserObj = new BehaviorSubject<BnUserObject>({} as BnUserObject);
  public currentUserObj$ = this.currentUserObj.asObservable().pipe(distinctUntilChanged());

  currentUserId: string = '';

  private uRoles:BnRolesAccessObject[] = []
  private userRoles = new BehaviorSubject<any>([]);
  public userRoles$ = this.userRoles.asObservable();


  private isAuth:boolean = false;
  private authenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.authenticated.asObservable();

  constructor(private logger:BnLoggerService) { }

  private __logMsg(type:any, msg:BnLogMsg){
    if(this.logger.doLog(this.logSource,type)){
      let formatMsg:any = this.logger.formatMsg(msg,this.logSource,type)
      console.log(formatMsg.msg,formatMsg.color);
    }
  }

  setIsAuthenticated(state:boolean) {
    this.__logMsg('debug',{ function: 'setIsAuthenticated', msg: state.toString()});
    this.isAuth = state;
    this.authenticated.next(this.isAuth);
  }

  isAuthenticated(){ return this.isAuth }
  getUserRoles(){ return this.uRoles }
  getUserObject(){ return this.currentUserObj.value }

  setCurrentUserObject(currentUserObject:BnUserObject){
    this.currentUserId = currentUserObject.id;
    this.currentUserObj.next(currentUserObject)
  }

  setUserRoles(userRoles:BnRolesAccessObject[]){
    this.uRoles = userRoles;
    this.userRoles.next(this.uRoles)
  }

  destroy(){
    this.__logMsg('debug',{ function: 'destroy', msg: this.currentUserId });
    this.currentUserObj.next({} as BnUserObject);
    this.isAuth = false;
    this.authenticated.next(this.isAuth);
    this.userRoles.next([])
  }

}
