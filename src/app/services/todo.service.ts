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
  constructor(db: AngularFirestore) {

  this.empresa = db.collection('empresas').doc('ZWEyVbhxWTE37ypNi0DL');
  }
 
  getCompany(){
    return this.empresa.get()
  }
}