import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  
  constructor(private afAuth: AngularFireAuth
    , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        // Que hacer en home si se encontro un usuario data.email tiene el correo del usuario
      }
      else {
        //en caso de que no 
      }
    });
  }

}
