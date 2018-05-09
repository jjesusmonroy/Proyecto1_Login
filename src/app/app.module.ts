import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import  firebase  from "firebase";
import { GooglePlus } from '@ionic-native/google-plus'; 

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
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
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
    GooglePlus
  ]
})
export class AppModule {}
