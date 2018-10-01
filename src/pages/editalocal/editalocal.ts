import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModelosProvider } from '../../providers/modelos/modelos';
import { Observable } from 'rxjs';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
/**
 * Generated class for the EditalocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editalocal',
  templateUrl: 'editalocal.html',
})
export class EditalocalPage {

	local:any;

  constructor(private afs: AngularFirestore,private modelosservice: ModelosProvider,private view:ViewController,public navCtrl: NavController, public navParams: NavParams) {

  	this.local=navParams.get("data")

  	//this.local=this.modelosservice.getLocal(this.local.id)
  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditalocalPage');
  }

     closeModal(){


  

    this.view.dismiss()


}

actualizar(data: any): void {


    this.modelosservice.updateLocal(this.local)

     this.view.dismiss() 
}

eliminar(data: any): void {

   this.modelosservice.eliminaLocal(this.local)

     this.view.dismiss() 
}





}
