import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro-page/intro-page';
import { ChecklistPage } from '../pages/checklist-page/checklist-page';
import { SettingsPage } from '../pages/settings/settings';
import { Data } from '../providers/data';
import { Settings } from '../providers/settings';

@NgModule({
declarations: [
MyApp,
HomePage,
IntroPage,
ChecklistPage,
SettingsPage
],

imports: [
IonicModule.forRoot(MyApp)
],

bootstrap: [IonicApp],
entryComponents: [
MyApp,
HomePage,
IntroPage,
ChecklistPage,
SettingsPage
],

})

export class AppModule {}