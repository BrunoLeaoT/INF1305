import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
export interface Todo {
  id?: string;
  task: string;
  priority: number;
  createdAt: number;
}
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  empresa: any;
  constructor(private db: AngularFirestore, private storage: Storage) {

  }
 
  async login(address){
    this.db.collection("agentes").get().toPromise().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data().address);
        if(address == doc.data().address){
          this.storage.set('loginTipo', doc.data().tipo);
          return true
        }
        return false;
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
  }
}