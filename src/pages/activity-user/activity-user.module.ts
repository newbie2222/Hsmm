import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityUserPage } from './activity-user';

@NgModule({
  declarations: [
    ActivityUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityUserPage),
  ],
})
export class ActivityUserPageModule {}
