import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'checklist-page',
  templateUrl: 'checklist-page.html'
})
export class ChecklistPage {

	checklist: any;
	background: any;

	constructor(public nav: NavController, public navParams: NavParams, public alertCtrl: AlertController){
		this.checklist = this.navParams.get('checklist');
		this.getColors();
	}

	addItem(): void {

	    let prompt = this.alertCtrl.create({
	      title: 'Add Item',
	      message: 'Enter name of new item:',
	      inputs: [
	        {
	          name: 'name'
	        }
	      ],
	      buttons: [
	        {
	          text: 'Cancel'
	        },
	        {
	          text: 'Save',
	          handler: data => {
		 		       this.checklist.addItem(data.name);
	          }
	        }
	      ]
	    });

	    prompt.present();

	}

	toggleItem(item): void {
		this.checklist.toggleItem(item);
	}

	removeItem(item): void {
		this.checklist.removeItem(item);
	}

	renameItem(item): void {

	    let prompt = this.alertCtrl.create({
	      title: 'Rename Item',
	      message: 'Enter new name of this item:',
	      inputs: [
	        {
	          name: 'name'
	        }
	      ],
	      buttons: [
	        {
	          text: 'Cancel'
	        },
	        {
	          text: 'Save',
	          handler: data => {
		 		this.checklist.renameItem(item, data.name);
	          }
	        }
	      ]
	    });

	    prompt.present();

	}

	uncheckItems(): void {
		this.checklist.items.forEach((item) => {
			if(item.checked){
				this.checklist.toggleItem(item);
			}
		});
	}

	getColors() {
	  	if(localStorage.getItem('background') != null){
	  		this.background = localStorage.getItem('background');
	  	}
	  	else {
	  	this.background = "#2C69CC";
	  	}
	 }

	showPrompt(item) {
    let prompt = this.alertCtrl.create({
      title: 'Delete Item',
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            this.removeItem(item);
          }
        }
      ]
    });
    prompt.present();
  }

}