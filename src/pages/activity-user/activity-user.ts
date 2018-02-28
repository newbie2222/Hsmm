import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IbadahPage } from '../ibadah/ibadah';

/**
 * Generated class for the ActivityUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity-user',
  templateUrl: 'activity-user.html',
})
export class ActivityUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityUserPage');
  }
  ibadah()
  {
  this.navCtrl.push(IbadahPage)
  }
}
