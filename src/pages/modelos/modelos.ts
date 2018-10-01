import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';

import { AgregamodeloPage } from '../agregamodelo/agregamodelo';
import { EditamodeloPage } from '../editamodelo/editamodelo';
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

  constructor(private view:ViewController,public modalCtrl: ModalController,private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {


  this.modelos = this.modelosservice.getData();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelosPage');
  }

  closeModal(){


  

    this.view.dismiss()


}


  agrega(){

  	

      let profileModal = this.modalCtrl.create(AgregamodeloPage, {});
   profileModal.onDidDismiss(data => {
     

   });
   profileModal.present();


  }

    editar(data){

    

      let profileModal = this.modalCtrl.create(EditamodeloPage, {data:data});
   profileModal.onDidDismiss(data => {
     

   });
   profileModal.present();


  }


}
