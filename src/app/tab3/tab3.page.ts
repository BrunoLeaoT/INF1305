import { Component } from '@angular/core';
import { Methods } from '../service/methods';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [Methods]
})
export class Tab3Page {
  status: any;
  empresa: any;
  resposta: any = true;
  login: any = 2;
  loading: any;
  address: any;
  data: any;
  aguardandoTransacao: any =false;
  constructor( private methods: Methods, private storage: Storage, private loadingController: LoadingController){
  }
  async createLoading(){
    this.loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    this.loading.present();
  }
  ionViewWillEnter(){
    this.verficarTipoLogin();
  }

  async verficarTipoLogin(){
    this.storage.get('loginTipo').then(data => {  
      console.log(data);
      if(data == 1 || data == 0 || data == 3)
        this.login = data;
      else
        this.login = 2;
    })
  }

  async setEmpresa(){
    this.aguardandoTransacao = true;
    this.methods.criarEmpresa(this.empresa, this.address)
    .then(data =>{this.aguardandoTransacao = false});
    this.resposta = false;
  }

  async criarLog(){
    this.aguardandoTransacao = true;
    let data = moment().format("DD-MM-YYYY");
    this.methods.criarLog(this.empresa, this.status, data);
  }
  async verificarLog(){
    this.aguardandoTransacao = true;
    this.methods.verificarLog(this.empresa, this.status, this.data);
  }
  async email(){
    this.aguardandoTransacao = true;
  }
  ionViewWillLeave(){
    this.aguardandoTransacao = false;
  }
}
