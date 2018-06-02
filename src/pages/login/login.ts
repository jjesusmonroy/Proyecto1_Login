import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { GooglePlus } from "@ionic-native/google-plus";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AngularFireModule } from "angularfire2";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  userData: any;

  constructor(private afAuth: AngularFireAuth, private facebook: Facebook, public googleplus: GooglePlus
    , public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.navCtrl.push('HomePage');
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  loginWithFB() {
    this.navCtrl.push('FacebookPage');
  }

  loginWithGoogle() {
    this.googleplus.login({
      'webClientId': '433620493367-cttcqh7q1p8bk8nbm8ip23jcg553s5ua.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then(suc => {
          alert("LOGIN SUCCESFULLY");
        }).catch(ns => {
          alert("NOT SUCCESFULL")
        })
    });
  }

}
