import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SemakibadahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-semakibadah',
  templateUrl: 'semakibadah.html',
})
export class SemakibadahPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
    console.log('ionViewDidLoad SemakibadahPage');
  }

}
