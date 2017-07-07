import { Component } from '@angular/core';
import { NavController, AlertController, Platform, NavParams } from 'ionic-angular';
import { ChecklistPage } from '../checklist-page/checklist-page';
import { ChecklistModel } from '../../models/checklist-model';
import { Data } from '../../providers/data';
import { IntroPage } from '../intro-page/intro-page';
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';
/*import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';*/

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  checklists: ChecklistModel[] = [];
  background: any;

  constructor(public navParams: NavParams, public nav: NavController, public dataService: Data, public alertCtrl: AlertController, public storage: Storage, public platform: Platform/*, public admob: AdMobFree*/) {
    
   
  }

  ionViewWillEnter(){
    this.getColors();
  }

  ionViewDidLoad(){
 
    this.platform.ready().then(() => {

     /* const bannerConfig: AdMobFreeBannerConfig = {
       // add your config here
       // for the sake of this example we will just use the test config
       isTesting: true,
       autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);*/

      this.storage.get('introShown').then((result) => {
        if(!result){
          this.storage.set('introShown', true);
          this.nav.setRoot(IntroPage);
        }
        
      });

      this.dataService.getData().then((checklists) => {

        let savedChecklists: any = false;

        if(typeof(checklists) != "undefined"){
          savedChecklists = JSON.parse(checklists);
        }

        if(savedChecklists){

          savedChecklists.forEach((savedChecklist) => {

            let loadChecklist = new ChecklistModel(savedChecklist.title, savedChecklist.items);
            this.checklists.push(loadChecklist);

            loadChecklist.checklist.subscribe(update => {
              this.save();
            });

          });

        }

      });

    });

  }

  addChecklist(): void {
    let prompt = this.alertCtrl.create({
      title: 'New List',
      message: 'Enter name of list:',
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
            let newChecklist = new ChecklistModel(data.name, []);
            this.checklists.push(newChecklist);

            newChecklist.checklist.subscribe(update => {
              this.save();
            });

            this.save();
          }
        }
      ]
    });

    prompt.present();
  }

  renameChecklist(checklist): void {

    let prompt = this.alertCtrl.create({
      title: 'Rename List',
      message: 'Enter new name of list:',
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

            let index = this.checklists.indexOf(checklist);

            if(index > -1){
              this.checklists[index].setTitle(data.name);
              this.save();
            }

          }
        }
      ]
    });

    prompt.present();

  }

  viewChecklist(checklist): void {
    this.nav.push(ChecklistPage, {
      checklist: checklist
    });
  }

  viewSettings(): void {
    this.nav.push(SettingsPage, {
    });
  }

  removeChecklist(checklist): void{

    let index = this.checklists.indexOf(checklist);

    if(index > -1){
      this.checklists.splice(index, 1);
      this.save();
    }

  }

  itemsCount(checklist): number {
    let itemsArray = checklist.items;
    let count = 0;

    itemsArray.forEach((item) => {
      if(item.checked) {
        count++;
      }
    });
    return count;
  }

  save(): void {
    this.dataService.save(this.checklists);  	
  }

  showPrompt(checklist) {
    let prompt = this.alertCtrl.create({
      title: 'Delete List',
      message: "Are you sure you want to delete this list?",
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
            this.removeChecklist(checklist);
          }
        }
      ]
    });
    prompt.present();
  }

  getColors() {
      if(localStorage.getItem('background') != null){
        this.background = localStorage.getItem('background');
      }
      else {
      this.background = "#2C69CC";
      }
   }

   /*showBanner() {
 
        let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: true, // Remove in production
            autoShow: true
            //id: Your Ad Unit ID goes here
        };
 
        this.admob.banner.config(bannerConfig);
 
        this.admob.banner.prepare().then(() => {
            // success
        }).catch(e => console.log(e));
 
    }*/

}