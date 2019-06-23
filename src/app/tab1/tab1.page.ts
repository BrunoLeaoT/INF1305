import { Component } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Methods } from '../service/methods';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Methods]
})
export class Tab1Page {
  todoId = null;
  empresa: any;
  resposta: any = true;
  statusPesca: any = false;
  constructor( private router: Router, private route: ActivatedRoute,  private todoService: TodoService, private methods: Methods){
   
  }
  async getEmpresa(){
    this.statusPesca = await this.methods.getEmpresa(this.empresa);
    this.resposta = false;
  }
  async login(){
    this.todoService.getCompany('0x720b701A172C4274f44D26000B91593a7532A3E7')
  }
}
