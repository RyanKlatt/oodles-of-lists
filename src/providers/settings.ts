import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Settings {

  constructor(public storage: Storage) {

  }

  load(){
  	this.storage.get('settings');
  }

  changeBackgroundColor(settingsColor){
  	this.storage.set('settings', settingsColor);
  	console.log(settingsColor);
  }

}
