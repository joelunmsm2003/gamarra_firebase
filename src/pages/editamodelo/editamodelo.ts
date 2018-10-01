import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';
/**
 * Generated class for the EditamodeloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editamodelo',
  templateUrl: 'editamodelo.html',
})
export class EditamodeloPage {

	modelo:any;

  constructor(private modelosservice: ModelosProvider,private view:ViewController,public navCtrl: NavController, public navParams: NavParams) {

  	this.modelo=navParams.get("data")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditamodeloPage');
  }

     closeModal(){


  

    this.view.dismiss()


}

actualizar(data: any): void {


    this.modelosservice.updateModelo(data)

     this.view.dismiss() 
}

eliminar(data: any): void {

   this.modelosservice.eliminaModelo(data)

     this.view.dismiss() 
}


}
