import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransaccionPage } from '../transaccion/transaccion';

import { ConfiguracionPage } from '../configuracion/configuracion';
import { ModelosProvider } from '../../providers/modelos/modelos';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as HighCharts from 'highcharts';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {


  posts: any;

  currentEvents:any;
  modelos: Observable<any[]>;
  colores: Observable<any[]>;
  modeloshistorico:Observable<any[]>;
  modelo:any;
  fondo:any;
  movi:any;
  locales:any;
  lll:any;

totales: Observable<any[]>;


  constructor(public http: Http,db: AngularFirestore,private modelosservice: ModelosProvider,public navCtrl: NavController) {




    this.http.get('http://localhost:8000/movimientos/1/4').subscribe(data => {
   

     this.movi=JSON.parse(data['_body'])

     console.log(this.movi)

    });



  this.locales = this.modelosservice.getLocales();

  this.modelos = this.modelosservice.getData()

  this.modelos = this.modelosservice.getData();

  this.modelosservice.getData().subscribe(data=>{

        console.log('wuwywyw',data)  

  })

  this.modelosservice.getTotales().subscribe(data=>{

        console.log('totales',data)  

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



    ionViewDidLoad() {








  }




  onDaySelect(cata){

  	console.log('dia..',cata)



      this.navCtrl.push(TransaccionPage, {
      fecha: cata,
    })




  }

    configuracion(cata){

    console.log('dia..',cata)



      this.navCtrl.push(CalendarioPage, {
      fecha: cata,
    })




  }

  traecolores(data){


    console.log(data)

    this.modelo=data.nombre

    this.colores = this.modelosservice.getColores(data.id);


  }

 

  bus(lo,mo){

    console.log(lo,mo)

    this.http.get('http://192.168.1.109:8000/movimientos/'+lo+'/'+mo).subscribe(data => {
   
     this.movi=JSON.parse(data['_body'])

     console.log(this.movi)

     var lll = [];

     for(var m in this.movi){

       console.log(this.movi[m]['color__nombre'])

       lll.push(this.movi[m]['color__nombre'])
     }

     var s = [];

     for(var m in this.movi){

       console.log(this.movi[m]['color__nombre'])

       s.push(this.movi[m]['S'])
     }

          var _m = [];

     for(var m in this.movi){

       console.log(this.movi[m]['color__nombre'])

       _m.push(this.movi[m]['M'])
     }

          var l = [];

     for(var m in this.movi){

       console.log(this.movi[m]['color__nombre'])

       l.push(this.movi[m]['L'])
     }

    
    var myChart = HighCharts.chart('container', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Color - Talla'
      },
      xAxis: {
        categories: lll
      },
      yAxis: {
        title: {
          text: 'Cantidad'
        }
      },
      series: [{
        name: 'S',
        data: s
      }, {
        name: 'M',
        data: _m
      },{
        name: 'L',
        data: l

      }]
    });


    });

   

  


  }

    

}
