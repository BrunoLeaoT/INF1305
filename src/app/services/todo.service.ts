import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
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
 
  private todos: Observable<Todo[]>;
  empresa: any;
  constructor(private db: AngularFirestore) {

  }
 
  async getCompany(address){
    this.db.collection("agentes").get().toPromise().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
  }
}