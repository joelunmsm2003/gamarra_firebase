import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';

import { AgregamodeloPage } from '../agregamodelo/agregamodelo';
/**
 * Generated class for the ModelosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modelos',
  templateUrl: 'modelos.html',
})
export class ModelosPage {

  modelos:any

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {


  this.modelos = this.modelosservice.getData();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelosPage');
  }


  agrega(){

  	this.navCtrl.push(AgregamodeloPage, {
 
    })

  }

}
