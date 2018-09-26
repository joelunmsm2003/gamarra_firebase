import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';
import { Observable } from 'rxjs';

import { MovimientoPage } from '../movimiento/movimiento';

/**
 * Generated class for the TransaccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaccion',
  templateUrl: 'transaccion.html',
})
export class TransaccionPage {

  modeloshistorico:Observable<any[]>;
  fecha:any;
  contador:any;

  constructor(public modalCtrl: ModalController,private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {


  this.fecha=navParams.get("fecha")

  this.fecha=this.fecha.date+'-'+this.fecha.month+'-'+this.fecha.year

  this.modeloshistorico = this.modelosservice.getFecha(this.fecha);

  this.modelosservice.getFecha(this.fecha).subscribe(data => {

    console.log('modelosservice',data.length)
    this.contador=data.length

  });


 console.log('hshshs',this.fecha)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransaccionPage');


 


  }


  ingreso(){

    // this.navCtrl.push(MovimientoPage, {fecha:this.fecha
      
    // })



   let profileModal = this.modalCtrl.create(MovimientoPage, { fecha:this.fecha});
   profileModal.onDidDismiss(data => {
     

   });
   profileModal.present();

  }





}
