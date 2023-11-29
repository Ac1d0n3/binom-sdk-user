import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
registerLocaleData(localeEn, 'en');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeDe, 'de', localeDeExtra);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  