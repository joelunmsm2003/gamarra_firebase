import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';

import { AgregatipomovimientoPage } from '../agregatipomovimiento/agregatipomovimiento';

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

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {


  	

  	this.tipomovimientos= this.modelosservice.getTipomovimiento()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipomovimientoPage');
  }

    agrega(){

  	this.navCtrl.push(AgregatipomovimientoPage, {
 
    })

  }

}
