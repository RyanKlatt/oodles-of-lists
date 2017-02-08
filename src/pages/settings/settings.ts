import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {


  constructor(public navCtrl: NavController, public settingsService: Settings, public storage: Storage) {

  }

  ionViewDidLoad() {
    this.settingsService.load();
  }

  changeBackgroundColor(settingsColor){
    this.settingsService.changeBackgroundColor(settingsColor); 
  }

}
