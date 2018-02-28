import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IbadahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ibadah',
  templateUrl: 'ibadah.html',
})
export class IbadahPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ibadah()
  {
  this.navCtrl.push(IbadahPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IbadahPage');
  }

}
