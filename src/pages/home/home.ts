import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any={
    username:"",
    password:""
  }
  constructor(public navCtrl: NavController) {

  }

  succesfullLogin():void{

  }

}
