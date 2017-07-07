import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
//import { HeaderColor } from '@ionic-native/header-color';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform/* , private headerColor: HeaderColor*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.hide();
      Splashscreen.hide();
      //this.headerColor.tint("#222222");
    });
    StatusBar.backgroundColorByHexString('#222222');
  }
}
