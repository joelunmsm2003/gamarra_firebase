import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController ,ViewController} from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';

import { AgregacolorPage } from '../agregacolor/agregacolor';
import { EditacolorPage } from '../editacolor/editacolor';
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

  constructor(private view:ViewController,public modalCtrl: ModalController,private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {

  	 this.colores = this.modelosservice.getColor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColoresPage');
  }

  closeModal(){


  

    this.view.dismiss()


}

  agrega(){

  	 
   let profileModal = this.modalCtrl.create(AgregacolorPage, {});
   profileModal.onDidDismiss(data => {
     

   });
   profileModal.present();


  }


  editar(data){

     
   let profileModal = this.modalCtrl.create(EditacolorPage, {data:data});
   profileModal.onDidDismiss(data => {
     

   });
   profileModal.present();


  }

}
