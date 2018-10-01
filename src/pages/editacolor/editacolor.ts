import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';
/**
 * Generated class for the EditacolorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editacolor',
  templateUrl: 'editacolor.html',
})
export class EditacolorPage {

	color:any;

  constructor(private modelosservice: ModelosProvider,private view:ViewController,public navCtrl: NavController, public navParams: NavParams) {

  	this.color=navParams.get("data")



  	console.log(this.color)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditacolorPage');
  }
   closeModal(){


  

    this.view.dismiss()


}

actualizar(data: any): void {


    this.modelosservice.updateColor(data)

     this.view.dismiss() 
}

eliminar(data: any): void {

   this.modelosservice.eliminaColor(data)

     this.view.dismiss() 
}






}
