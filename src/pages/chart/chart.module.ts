import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartPage } from './chart';
import { SemakibadahPage } from '../semakibadah/semakibadah';

@NgModule({
  declarations: [
    ChartPage,
    SemakibadahPage
  ],
  imports: [
    IonicPageModule.forChild(ChartPage),
  ],
})
export class ChartPageModule {}
