import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  settingsColor = "#000";


  constructor(public navCtrl: NavController, public settingsService: Settings, public storage: Storage) {

  }

}
