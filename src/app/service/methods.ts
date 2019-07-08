import contract from './contrato';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, Injectable } from '@angular/core';
import { resolve } from 'path';
import Web3 from '../service/web3';
@Component({
    providers: [AngularFirestore]
  })
  @Injectable({
    providedIn: 'root'
  })
export class Methods {
    constructor(private db: AngularFirestore){
    
     }
    ionViewDidLoad(){
        
    }
    async criarEmpresa(nome, address){
        contract.methods.criarEmpresa(nome, address).send({from: contract._defaultAccount}).then(console.log);
    }
    
    criarLog(nome, consciente, data){
        let bool = false;
        if(consciente == "true")
            bool = true;
        
        this.pegarAddressEmpresa(nome).then(dado=>{
            contract.methods.criarLog(dado, bool, data, false).send({from: dado})
            .then(console.log);
        });
    }
    verificarLog(nome, consciente, data){
        let bool = false;
        if(consciente == "true")
            bool = true;
            this.pegarAddressEmpresa(nome)
            .then(async dado=>{
                Web3.eth.getAccounts().then(add => {
                    contract.methods.verificarLog(dado, bool, data).send({from: add[0]})
                    .then(console.log);
                })
            });
    }
    async getEmpresa(empresaRequesitada){
        return new Promise((resolve, reject)=>{
            let address;
            this.pegarAddressEmpresa(empresaRequesitada)
            .then(data=>{
                address = data;
                contract.methods.getLogs(address).call().then(logs => {
                    console.log(logs);
                    return resolve(logs);
                });
            })
            .catch(err =>{
                reject(err);
            })
        })
       
    }

    async pegarAddressEmpresa(empresa){
        return new Promise((resolve, reject)=>{
            this.db.collection("agentes").get().toPromise().then((snapshot) => {
                snapshot.forEach((doc) => {
                    if(empresa == doc.data().nome){
                        return resolve(doc.data().address);
                    }
                });
            })
            .catch((err) => {
            console.log('Error getting documents', err);
                reject(err);
            });
        })
      }
}