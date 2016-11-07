import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'intro-page',
  templateUrl: 'intro-page.html'
})
export class IntroPage {

  slideOptions: any;  

  constructor(public nav: NavController){
    this.slideOptions = {
      pager: true
    };
  }

  goToHome(): void {
    this.nav.setRoot(HomePage);
  }
}