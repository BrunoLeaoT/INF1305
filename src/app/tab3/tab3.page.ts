import { Component } from '@angular/core';
import { Methods } from '../service/methods';

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
  constructor( private methods: Methods){
   
  }
  async setEmpresa(){
    await this.methods.criarEmpresa(this.empresa, this.status);
    this.resposta = false;
  }
}
