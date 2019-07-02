import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
export interface Todo {
  id?: string;
  task: string;
  priority: number;
  createdAt: number;
}
 
@Injectable({
  providedIn: 'root',
})
export class TodoService {

  empresa: any;
  constructor(private db: AngularFirestore, private storage: Storage) {

  }
 
  async login(address){
    this.db.collection("agentes").get().toPromise().then((snapshot) => {
      snapshot.forEach((doc) => {
        if(address == doc.data().address){
          this.storage.set('loginTipo', doc.data().tipo);
          console.log(doc.data().tipo);
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