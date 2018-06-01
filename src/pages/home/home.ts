import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public mensaje : string = '';
  constructor(private afAuth: AngularFireAuth
    , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.mensaje = `Bienvenido ${data.email}`;
      }
      else {
        this.mensaje = `No fue posible encontrar un usuario con ese correo`;
      }
    });
  }

}
