import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { UtamaPage } from '../pages/utama/utama';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { LokasiPage } from '../pages/lokasi/lokasi';
import { LoginPage } from '../pages/login/login';
import { AktivitiPage } from '../pages/aktiviti/aktiviti';

import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    UtamaPage,
    AboutPage,
    ContactPage,
    LokasiPage,
    TabsPage,
    LoginPage,
    AktivitiPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UtamaPage,
    AboutPage,
    ContactPage,
    LokasiPage,
    TabsPage,
    LoginPage,
    AktivitiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    UserProvider,
  ]
})
export class AppModule {}
