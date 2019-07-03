import { Component } from '@angular/core';
import { Methods } from '../service/methods';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { stat } from 'fs';

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
    await this.methods.criarEmpresa(this.empresa, this.address);
    this.resposta = false;
  }

  async criarLog(){
    let data = "04-07-2019"//moment().format("DD-MM-YYYY");
    this.methods.criarLog(this.empresa, this.status, data);
  }
  async verificarLog(){
    this.methods.verificarLog(this.empresa, this.status, this.data);
  }
}
