import contract from './contrato';

export class Methods {
    constructor(){
    
     }
    ionViewDidLoad(){
        
    }
    async criarEmpresa(nome, status){
        contract.methods.criarEmpresa(nome, status).send({from: contract._defaultAccount}).then(console.log);
    }
    async getEmpresa(empresaRequesitada){
        let response;
        response  = await contract.methods.verificarEmpresa(empresaRequesitada).call();
        return response;
    }
}