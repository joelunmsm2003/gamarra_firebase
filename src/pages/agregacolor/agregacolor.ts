import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';


/**
 * Generated class for the AgregacolorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregacolor',
  templateUrl: 'agregacolor.html',
})
export class AgregacolorPage {

  constructor(private view:ViewController,private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregacolorPage');
  }

  guarda(nombre){

  	this.modelosservice.creaColor(nombre);


    this.view.dismiss()

  }


  closeModal(){


  

    this.view.dismiss()


}


}
