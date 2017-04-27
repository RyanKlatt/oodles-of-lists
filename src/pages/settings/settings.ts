import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  background: any;

  constructor(public navCtrl: NavController, public settingsService: Settings, public storage: Storage) {
  	this.getColors();
  }

  getColors() {
  	this.background = "#2C69CC";
  }

}
