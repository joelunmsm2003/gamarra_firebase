import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';
/**
 * Generated class for the AgregatipomovimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregatipomovimiento',
  templateUrl: 'agregatipomovimiento.html',
})
export class AgregatipomovimientoPage {

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregatipomovimientoPage');
  }


  guarda(nombre){

  	this.modelosservice.creaTipomovimiento(nombre);

  }

}
