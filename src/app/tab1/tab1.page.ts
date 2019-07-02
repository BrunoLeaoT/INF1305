import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Methods } from '../service/methods';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
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
  loginStatus: any = false;
  logs: any;
  loading: any;
  constructor( private router: Router, private route: ActivatedRoute,  private todoService: TodoService, private methods: Methods, private storage: Storage, private loadingCont: LoadingController){
   
  }
  async createLoading(){
    this.loading = await this.loadingCont.create({
      message: 'Loading...',
      duration: 2000
    });
    this.loading.present();
  }

  async getEmpresa(){
    this.methods.getEmpresa(this.empresa).then(data=>{this.logs =data;console.log(this.logs);});
  }
  
  async login(){
    this.todoService.login('0x2d223E6AA2046AF3850F5C9e17741562e47d1b43');
    this.loginStatus = true;
  }
  logout(){
    this.storage.clear();
    this.loginStatus = false;
  }
}
