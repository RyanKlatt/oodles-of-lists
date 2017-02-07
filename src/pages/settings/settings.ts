import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  myColor: string;


  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  ionViewDidLoad() {
    this.storage.get('myColor').then((myColor) => {
       this.myColor = this.myColor;
     })
  }

  changeBackgroundColor(myColor) {
    this.storage.set('myColor', 'myColor');
       this.myColor = myColor;
  }

}
