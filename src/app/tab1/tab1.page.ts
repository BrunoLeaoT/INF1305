import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Methods } from '../service/methods';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import Web3 from '../service/web3';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Methods]
})
export class Tab1Page {
  todoId = null;
  empresa: any;
  empresaPesquisada: any;
  resposta: any = true;
  statusPesca: any = false;
  loginStatus: any = false;
  logs: any;
  loading: any;
  constructor( private router: Router, private route: ActivatedRoute,  private todoService: TodoService, private methods: Methods, private storage: Storage, private loadingCont: LoadingController){
   
  }
  ionViewWillEnter(){
    this.storage.get('loginTipo')
    .then(login =>{
      if( login != null)
        this.loginStatus = true;
    })
  }
  async createLoading(){
    this.loading = await this.loadingCont.create({
      message: 'Loading...',
      duration: 2000
    });
    this.loading.present();
  }

  async getEmpresa(){
    this.empresaPesquisada = this.empresa;
    this.methods.getEmpresa(this.empresa).then(data=>{this.logs =data;});
  }

  async login(){
    Web3.eth.getAccounts().then(e =>this.todoService.login(e));
    this.loginStatus = true;
  }
  logout(){
    this.storage.clear();
    this.loginStatus = false;
  }
}
