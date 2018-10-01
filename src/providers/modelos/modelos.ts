import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
  Generated class for the ModelosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModelosProvider {


notesCollection: AngularFirestoreCollection<any>;

coloresCollection: AngularFirestoreCollection<any>;

fechaCollection: AngularFirestoreCollection<any>;

colorCollection: AngularFirestoreCollection<any>;

tallasCollection: AngularFirestoreCollection<any>;

tipomovimientoCollection:AngularFirestoreCollection<any>;

creamodeloCollection:AngularFirestoreCollection<any>;

creamodelCollection:AngularFirestoreCollection<any>;

creacolorCollection:AngularFirestoreCollection<any>;


crealocalCollection:AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    
    this.notesCollection = this.afs.collection('modelos', (ref) => ref.limit(15));

  }


  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.notesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

    getColor(): Observable<any[]> {
    // ['added', 'modified', 'removed']

    this.colorCollection = this.afs.collection('colores', (ref) => ref.limit(15));


    return this.colorCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getColores(data): Observable<any[]> {

    this.coloresCollection = this.afs.collection('modelos/'+data+'/color', (ref) => ref.limit(15));
    // ['added', 'modified', 'removed']
    return this.coloresCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

    getTallas(): Observable<any[]> {

    this.tallasCollection = this.afs.collection('talla/', (ref) => ref.limit(15));
    // ['added', 'modified', 'removed']
    return this.tallasCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

     getLocales(): Observable<any[]> {

    this.tipomovimientoCollection = this.afs.collection('locales/', (ref) => ref.limit(15));
    // ['added', 'modified', 'removed']
    return this.tipomovimientoCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }



    getFecha(data): Observable<any[]> {

     console.log('provider',data)

    this.fechaCollection = this.afs.collection('modelos_historico/'+data+'/modelos', (ref) => ref.limit(15));
    // ['added', 'modified', 'removed']
    return this.fechaCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

   creaModelo(movimiento: string,fecha) {



    this.creamodeloCollection = this.afs.collection('modelos_historico/'+fecha+'/modelos', (ref) => ref.limit(15));

    const note = {
      movimiento,
      time: new Date().getTime(),
    };
    return this.creamodeloCollection.add(note);
  }

     creaModel(nombre) {



    this.creamodelCollection = this.afs.collection('modelos/', (ref) => ref.limit(15));

    const note = {
      nombre:nombre,
      
    };
    return this.creamodelCollection.add(note);
  }


     creaColor(nombre) {



    this.creacolorCollection = this.afs.collection('colores/', (ref) => ref.limit(15));

    const note = {
      nombre:nombre,
      
    };
    return this.creacolorCollection.add(note);
  }

       creaLocal(nombre) {



    this.crealocalCollection = this.afs.collection('locales/', (ref) => ref.limit(15));

    const note = {
      nombre:nombre,
      
    };
    return this.crealocalCollection.add(note);
  }

   getLocal(id: string) {


     console.log('id....',id)
    return this.afs.doc<any>('locales/${id}');
  }

   updateLocal(data: any) {


    this.afs.doc<any>('locales/'+data.id)
    .update({ nombre: data.nombre}); 

    
  }

     eliminaLocal(data: any) {


    this.afs.doc<any>('locales/'+data.id)
    .delete(); 

    
  }


     updateColor(data: any) {


    this.afs.doc<any>('colores/'+data.id)
    .update({ nombre: data.nombre}); 

    
  }

     eliminaColor(data: any) {


    this.afs.doc<any>('colores/'+data.id)
    .delete(); 

    
  }

       updateModelo(data: any) {


    this.afs.doc<any>('modales/'+data.id)
    .update({ nombre: data.nombre}); 

    
  }

     eliminaModelo(data: any) {


    this.afs.doc<any>('modelos/'+data.id)
    .delete(); 

    
  }









  // /modelos/JmEq2J9cB6tEN9qjfReG/color

}
