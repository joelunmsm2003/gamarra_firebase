import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';


/**
 * Generated class for the AgregamodeloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregamodelo',
  templateUrl: 'agregamodelo.html',
})
export class AgregamodeloPage {

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregamodeloPage');
  }

  guarda(nombre){

  	this.modelosservice.creaModel(nombre);

  }

}
