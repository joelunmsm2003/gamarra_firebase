import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModelosPage } from '../modelos/modelos';


import { ColoresPage } from '../colores/colores';


import { TipomovimientoPage } from '../tipomovimiento/tipomovimiento';
/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

  modelos(){

  	   this.navCtrl.push(ModelosPage, {
    })

  }

  colores(){

  	   this.navCtrl.push(ColoresPage, {
 
    })


  }

    tipomovimiento(){

  	   this.navCtrl.push(TipomovimientoPage, {
 
    })


  }

}
