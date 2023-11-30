import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, Validator, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormGroup, FormControl } from "@angular/forms";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { BnPasswordValidationMsg } from './validationMsg.json';
import { BnErrorStateMatcher } from './errorstate-matcher.validator';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BnSuffixInfoComponent } from '@binom/sdk-core/info';
import { BnFormErrorComponent } from '@binom/sdk-core/form-error'

@Component({
  selector: 'bn-password-input',
  templateUrl: './bn-password-input.component.html',
  imports:[CommonModule,TranslateModule, MatInputModule,BnSuffixInfoComponent,
    MatButtonModule, MatProgressBarModule,FormsModule, ReactiveFormsModule, BnFormErrorComponent  ],
  standalone:true,
  styleUrl: './bn-password-input.component.css'
})
export class BnPasswordInputComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() color:any = 'accent';

  @Input() min: number = 8;
  @Input() max: number = 20;
  @Input() special: number = 1;
  @Input() upper: number = 1;
  @Input() lower: number = 1;
  @Input() digits: number = 1;
  @Input() allowedSpecial = '^a-zA-Z0-9\n';

  @Input() validationList: any = BnPasswordValidationMsg;

  matcher = new BnErrorStateMatcher();
  strength: number = 0; visible: boolean = false;
  strengthColor: string = 'warn';
  infoData:any = [];
  valList:any = [];

  constructor( private translate: TranslateService ) { }

  public bnPassword: FormGroup = new FormGroup({
    password: new FormControl("",Validators.required),
    password_repeat: new FormControl("",Validators.required),
  },{
    validators: this.checkPasswords
  });

  ngOnInit(): void {

    this.infoData.push({
      name:'min', end: 'charslong', start: 'bnPassword.mustbe',
      prefixIconClass: 'warn-color fa-fw fas fa-times', middle: this.min
    });
    if(this.special > 0){
      this.infoData.push({
        name:'special', end: 'bnPassword.errors.password.special', start: 'bnPassword.contains',
        prefixIconClass: 'warn-color fa-fw fas fa-times', middle: this.special
      });
    
      this.valList.push({
        regEx: new RegExp('(?=(.*['+this.allowedSpecial+']){'+ this.special+'})', "gm"),
        name: 'special'
      });
    }
    if(this.upper > 0){
      this.infoData.push({
        name:'upper', end: 'bnPassword.errors.password.upper', start: 'bnPassword.contains',
        prefixIconClass: 'warn-color fa-fw fas fa-times', middle: this.upper
      });
      
      this.valList.push({
        regEx: new RegExp('(?=(.*[A-Z]){'+ this.upper+'})', "gm"),
        name: 'upper'
      });
    }
    if(this.lower > 0){
      this.infoData.push({
        name:'lower', end: 'bnPassword.errors.password.lower', start: 'bnPassword.contains',
        prefixIconClass: 'warn-color fa-fw fas fa-times', middle: this.lower
      });
     
      this.valList.push({
        regEx: new RegExp('(?=(.*[a-z]){'+ this.lower+'})', "gm"),
        name: 'lower'
      });
    }
    if(this.digits > 0) {
      this.infoData.push({
        name:'digits', end: 'bnPassword.errors.password.digit', start: 'bnPassword.contains',
        prefixIconClass: 'warn-color fa-fw fas fa-times', middle: this.digits
      });
     
      this.valList.push({
        regEx: new RegExp('(?=(.*[0-9]){'+ this.digits+'})', "gm"),
        name: 'digits'
      });
    }

    this.bnPassword.controls["password"].setValidators(Validators.compose([
        Validators.required,
        Validators.maxLength(this.max),
        Validators.minLength(this.min),
        this.validatePwd(this.valList)
    ]));
  }

  checkPasswords(group: AbstractControl) {
    const password = group!.get('password')!.value;
    const confirmPassword = group!.get('password_repeat')!.value;
    return password === confirmPassword ? null : { notequal: true }
  }

  validatePwd(valList: any): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group!.value;
      let validAll = []
      for (let i = 0; i <valList.length; i++){
        if(valList[i].regEx !== undefined){
          password.match(valList[i].regEx) ? validAll.push(true):validAll.push(false);
        }
      }
      return !validAll.some(x => x === false) ? null : { notsecure: true }
  } }

  private updateInfoIcon(name:string, setvalid:boolean, unit:number){
    let index = this.infoData.findIndex((el:any) => el.name === name);
    if(index !== -1 && setvalid){
      this.infoData[index].prefixIconClass ='color-accent fa-fw fas fa-check';
      this.strength += unit;
    } else {
      if(index !== -1){
        this.infoData[index].prefixIconClass ='warn-color fa-fw fas fa-times';
      }
    }
  }

  updatePwdMeter(){
    let password = this.bnPassword.get('password')!.value;
    this.strength = 0;
    let unit = (100 - this.max) / (this.valList.length + 1) ;
    this.strength = password.length;
    for (let i = 0; i <this.valList.length; i++){
      if(this.valList[i].regEx !== undefined){
        this.updateInfoIcon(this.valList[i].name, password.match(this.valList[i].regEx), unit)
    }}
    if(password.length >= this.min) {
      this.updateInfoIcon('min', true, unit)
    } else {
      this.updateInfoIcon('min', false, unit)
    }
    this.strengthColor = 'warn';
    if(this.strength > 20) this.strengthColor = 'primary';
    if(this.strength > 70) this.strengthColor = 'accent';
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.bnPassword.setValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    this.bnPassword.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.bnPassword.disable() : this.bnPassword.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.bnPassword.valid ? null : { invalidForm: {valid: false, message: "bnPassword fields are invalid"}};
  }

}
