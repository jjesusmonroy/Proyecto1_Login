import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

import { GooglePlus } from "@ionic-native/google-plus";
import { Platform } from "ionic-angular";

/**
 * Generated class for the GoogleLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform) {
    this.user = this.afAuth.authState;
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<void> {
    try {
      const gplusUser = await this.gplus.login({
        //'webClientId': '1008339185704-e5eaa8gko2ip1haer53t5jpko0b3koe7.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
      
      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )

    } catch (error) {
      console.log(error);

    }
  }

  async webGoogleLogin(): Promise<void>{
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

    } catch (error) {
      console.log(error);      
    }
  }

  signOut(){
    this.afAuth.auth.signOut();
    if(this.platform.is('cordova')){
      this.gplus.logout();
    }
  }


}
