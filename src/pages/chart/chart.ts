import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal, ModalOptions } from 'ionic-angular';

/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  semakibadah(){
    const myModalData = {
      name: 'Nabil',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create('SemakibadahPage', { data: myData });

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    })

    myModal.onWillDismiss((data) => 
    {console.log("I'm about to dismiss");
    console.log(data);
  })
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

}
