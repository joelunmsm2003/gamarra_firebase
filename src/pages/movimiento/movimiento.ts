import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';
import { Observable } from 'rxjs';
/**
 * Generated class for the MovimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movimiento',
  templateUrl: 'movimiento.html',
})
export class MovimientoPage {

 modelos: Observable<any[]>;

 colores: Observable<any[]>;

 tallas: Observable<any[]>;

 tipomovimiento: Observable<any[]>;

 movimiento:any={};

 fecha:any;

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController, public navParams: NavParams) {


  	   this.fecha=navParams.get("fecha")
  	   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovimientoPage');

     this.modelos= this.modelosservice.getData()

       this.colores= this.modelosservice.getColor()

       this.tallas= this.modelosservice.getTallas()

       this.tipomovimiento= this.modelosservice.getTipomovimiento()

      

  }

  guarda(data){


		this.modelosservice.creaModelo(data,this.fecha);


  }

}
