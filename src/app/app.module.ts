import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import firebase  from "firebase";

firebase.initializeApp(
  {
    apiKey: "AIzaSyCFkRusjDqQbEMiwV1mfk7MKTu9o7zJYRE",
    authDomain: "proyecto1login.firebaseapp.com",
    databaseURL: "https://proyecto1login.firebaseio.com",
    projectId: "proyecto1login",
    storageBucket: "proyecto1login.appspot.com",
    messagingSenderId: "472989829357"
});

import { Facebook } from "@ionic-native/facebook";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
