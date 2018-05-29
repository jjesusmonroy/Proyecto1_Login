import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import  firebase  from "firebase";
import { GooglePlus } from '@ionic-native/google-plus';

import { LoginPage } from "../login/login";

//import { Validators, FormBuilder, FormGroup, FormControl,AbstractControl } from '@angular/forms';
//import { Validator } from '@angular/forms/src/directives/validators';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // loginForm: FormGroup;
  loginError: string;
 // private auth: AuthService;
  user:any={
    username:"",
    password:""
  }
  constructor(public navCtrl: NavController,public googlePlus:GooglePlus) {
    /*this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});*/
  }
  /*login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
    };
	//	this.auth.signInWithEmail(credentials)
	//		.then(
	//			() => this.navCtrl.setRoot(HomePage),
	//			error => this.loginError = error.message
	//		);
	}*/
  succesfullLogin():void{

  }
  loginWithGoogle(){
    /*this.googlePlus.login({
      'webClientID':'952784663505-k0o2fhrt01hehd5hg5n4flgjom490c8d.apps.googleusercontent.com',
      'ofline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        alert("Login Success")
      }).catch(notsuc=>{
        alert("Not Success ")
      })
    })*/
    this.navCtrl.push(LoginPage);
  }
  signup(){}

}
