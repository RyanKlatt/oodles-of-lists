import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  background: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public settingsService: Settings, public storage: Storage) {
  	this.getColors();
  }

  getColors() {
  	if(localStorage.getItem('background') != null){
  		this.background = localStorage.getItem('background');
  	}
  	else {
  	this.background = "#2C69CC";
  	}

  }

  save() {
  	localStorage.setItem('background', this.background);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Color Saved!',
      subTitle: 'Your background color settings have been saved!',
      buttons: ['OK']
    });
    alert.present();
  }

}
