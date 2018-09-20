import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';
import { Observable } from 'rxjs';


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

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {




	this.fecha=navParams.get("fecha")



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransaccionPage');


   this.modeloshistorico = this.modelosservice.getFecha(999);


  }



}
