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

  constructor(private afs: AngularFirestore) {
    
    this.notesCollection = this.afs.collection('modelos', (ref) => ref.limit(5));

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

  getColores(data): Observable<any[]> {

    this.coloresCollection = this.afs.collection('modelos/'+data+'/color', (ref) => ref.limit(5));
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


  // /modelos/JmEq2J9cB6tEN9qjfReG/color

}
