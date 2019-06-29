import { Component } from '@angular/core';
import { Methods } from '../service/methods';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

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
      if(data == 1 || data == 0)
        this.login = data;
      else
        this.login = 2;
    })
  }
  async setEmpresa(){
    await this.methods.criarEmpresa(this.empresa, this.status);
    this.resposta = false;
  }
}
