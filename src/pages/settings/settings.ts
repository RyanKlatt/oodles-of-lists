import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  myColor: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.myColor = this.navParams.get('myColor');
  }

  ionViewDidLoad() {
    
  }

  changeBackgroundColor(myColor:string) {
    this.myColor = myColor;
  }

}
