import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
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

  constructor(private view:ViewController,private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregatipomovimientoPage');
  }


  guarda(nombre){

  	this.modelosservice.creaLocal(nombre);


    this.view.dismiss()

  }

     closeModal(){


  

    this.view.dismiss()


}

}
