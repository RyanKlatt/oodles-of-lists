import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  private color: string;

  constructor(public navCtrl: NavController) {
  	this.color = 'dark';
  }

  ionViewDidLoad() {
    
  }

  changeColor(color:string) {
    this.color = color;
  }

}
