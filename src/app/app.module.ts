import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import  firebase  from "firebase";
import { GooglePlus } from '@ionic-native/google-plus'; 
import { ComponentsModule } from '../components/components.module';
import { LoginPage } from '../pages/login/login';

export const firebaseConfig={
  apiKey: "AIzaSyCu0w8ldHTdBLZW-iDA4hDXk9REEHyFd_4",
    authDomain: "proyecto1-login.firebaseapp.com",
    databaseURL: "https://proyecto1-login.firebaseio.com",
    projectId: "proyecto1-login",
    storageBucket: "proyecto1-login.appspot.com",
    messagingSenderId: "952784663505"
}

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
