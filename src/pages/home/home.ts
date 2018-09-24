import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransaccionPage } from '../transaccion/transaccion';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { ModelosProvider } from '../../providers/modelos/modelos';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentEvents:any;
  modelos: Observable<any[]>;
  colores: Observable<any[]>;
  modeloshistorico:Observable<any[]>;
  modelo:any;
  fondo:any;

  constructor(private modelosservice: ModelosProvider,public navCtrl: NavController) {





  this.modelos = this.modelosservice.getData();

  this.modelosservice.getData().subscribe(data=>{

        console.log('wuwywyw',data)  

  })

  this.fondo = '#113';

    console.log('colores',this.colores)
  
	this.currentEvents = [
  {
    year: 2017,
    month: 11,
    date: 25
  },
  {
    year: 2017,
    month: 11,
    date: 26
  }
];

  }

  onDaySelect(cata){

  	console.log('dia..',cata)



      this.navCtrl.push(TransaccionPage, {
      fecha: cata,
    })




  }

    configuracion(cata){

    console.log('dia..',cata)



      this.navCtrl.push(ConfiguracionPage, {
      fecha: cata,
    })




  }

  traecolores(data){


    console.log(data)

    this.modelo=data.nombre

    this.colores = this.modelosservice.getColores(data.id);


  }

    

}
