import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttandancePage } from './attandance';

@NgModule({
  declarations: [
    AttandancePage,
  ],
  imports: [
    IonicPageModule.forChild(AttandancePage),
  ],
})
export class AttandancePageModule {}
