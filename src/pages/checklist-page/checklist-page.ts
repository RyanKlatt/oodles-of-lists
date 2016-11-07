import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ChecklistPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checklist-page',
  templateUrl: 'checklist-page.html'
})
export class ChecklistPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ChecklistPagePage Page');
  }

}
