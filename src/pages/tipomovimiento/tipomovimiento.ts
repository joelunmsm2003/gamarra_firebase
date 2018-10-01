import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';

import { AgregatipomovimientoPage } from '../agregatipomovimiento/agregatipomovimiento';
import { EditalocalPage } from '../editalocal/editalocal';


/**
 * Generated class for the TipomovimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipomovimiento',
  templateUrl: 'tipomovimiento.html',
})
export class TipomovimientoPage {


tipomovimientos:any;

  constructor(public modalCtrl: ModalController,private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {


  	

  	this.tipomovimientos= this.modelosservice.getLocales()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipomovimientoPage');
  }

    agrega(){



      let profileModal = this.modalCtrl.create(AgregatipomovimientoPage, {});
   profileModal.onDidDismiss(data => {
     

   });
   profileModal.present();



  }

   editar(data){



      let profileModal = this.modalCtrl.create(EditalocalPage, {data:data});
   profileModal.onDidDismiss(data => {
     

   });
   profileModal.present();



  }

}
