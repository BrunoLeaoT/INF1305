import { Component } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  todoId = null;
  empresa: any;
  constructor( private router: Router, private route: ActivatedRoute,  private todoService: TodoService){
  }
  goTo(){
    
  }
}
