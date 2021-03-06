import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransaccionPage } from '../transaccion/transaccion';
import { CalendarioPage } from '../calendario/calendario';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { ModelosProvider } from '../../providers/modelos/modelos';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as HighCharts from 'highcharts';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


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
  movimientos:any;
  _movimientos:any;

totales: Observable<any[]>;


  constructor(public http: Http,db: AngularFirestore,private modelosservice: ModelosProvider,public navCtrl: NavController) {



    //db.collection(u'modelos_historico').document(day).collection('modelos').get()

      //var citiesRef = db.collection("cities");





    this.http.get('http://localhost:8000/movimientos/1/4').subscribe(data => {
   

     this.movi=JSON.parse(data['_body'])

     console.log(this.movi)

    });

   this.modelosservice.getFecha('20-10-2018').subscribe(data => {
   
       console.log('0',data)

       this._movimientos=data

       var data= data.filter(c => c.movimiento.destino === 'TORRE')

       var data= data.filter(c => c.movimiento.modelo === 'IBHET')

       let newcars = {}

       data.forEach(car => {
      newcars[car.movimiento.color] ? // check if that array exists or not in newcars object
      newcars[car.movimiento.color].push({talla: car.movimiento.talla, cantidad: car.movimiento.cantidad})  // just push
      : (newcars[car.movimiento.color] = [], newcars[car.movimiento.color].push({talla: car.movimiento.talla, cantidad: car.movimiento.cantidad})) // create a new array and push


      })


       
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

      var data = this._movimientos

      var data= data.filter(c => c.movimiento.destino === lo)

      var data= data.filter(c => c.movimiento.modelo === mo)

      let newcars = {}

      data.forEach(car => {
      newcars[car.movimiento.color] ? // check if that array exists or not in newcars object
      newcars[car.movimiento.color].push({talla: car.movimiento.talla, cantidad: car.movimiento.cantidad})  // just push
      : (newcars[car.movimiento.color] = [], newcars[car.movimiento.color].push({talla: car.movimiento.talla, cantidad: car.movimiento.cantidad})) // create a new array and push


      })


      console.log('newcars',newcars)




    //this.pedido.filter(c => c.id === data.id)

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

    var total=[]

    for(var m in this.movi){

       console.log(this.movi[m]['color__nombre'])

       total.push({name:this.movi[m]['color__nombre'],y:this.movi[m]['total']})
     }



    });

   

  


  }

    

}
