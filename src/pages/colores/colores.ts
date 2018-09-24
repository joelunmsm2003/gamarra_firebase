import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';

import { AgregacolorPage } from '../agregacolor/agregacolor';
/**
 * Generated class for the ColoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colores',
  templateUrl: 'colores.html',
})
export class ColoresPage {

	colores:any;

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {

  	 this.colores = this.modelosservice.getColor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColoresPage');
  }

  agrega(){

  	 this.navCtrl.push(AgregacolorPage, {
 
    })
  }

}
