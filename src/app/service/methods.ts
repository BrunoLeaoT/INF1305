import contract from './contrato';
import Web3 from 'web3';
import { InjectionToken, Inject } from '@angular/core';


// window.addEventListener('load', async () => {
//     // Modern dapp browsers...
//     if (window.ethereum) {
//         window.web3 = new Web3(ethereum);
//         try {
//             // Request account access if needed
//             await ethereum.enable();
//             // Acccounts now exposed
//             web3.eth.sendTransaction({/* ... */});
//         } catch (error) {
//             // User denied account access...
//         }
//     }
//     // Legacy dapp browsers...
//     else if (window.web3) {
//         window.web3 = new Web3(web3.currentProvider);
//         // Acccounts always exposed
//         web3.eth.sendTransaction({/* ... */});
//     }
//     // Non-dapp browsers...
//     else {
//         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//     }
// });

export const WEB3 = new InjectionToken<Web3>('web3',{
    providedIn : 'root',
    factory: () => {
        try {
            const provider = ('ethereum' in window) ? window['ethereum'] : Web3.givenProvider;
            return new Web3(provider);
        } catch (err) {
            throw new Error('No Ethereum provider');
        }
    }
});

export class Methods {
    address: any ='0xb747ac428148de26b725c5dd6a05d64537fa432f';
    abi: any = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "nome",
                    "type": "string"
                },
                {
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "criarEmpresa",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "string"
                },
                {
                    "name": "b",
                    "type": "string"
                }
            ],
            "name": "compareStrings",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "empresas",
            "outputs": [
                {
                    "name": "nome",
                    "type": "string"
                },
                {
                    "name": "consciente",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "nome",
                    "type": "string"
                }
            ],
            "name": "verificarEmpresa",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];
    contract: any;
    constructor(@Inject(WEB3) private web3: Web3){
    
        /* Parte JS para chamar o metamask */
        window.addEventListener('load', async () => {
            // Modern dapp browsers...
            if (window.ethereum) {
                window.web3 = new Web3(ethereum);
                try {
                    // Request account access if needed
                    await ethereum.enable();
                    // Acccounts now exposed
                    web3.eth.sendTransaction({/* ... */});
                } catch (error) {
                    // User denied account access...
                }
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                window.web3 = new Web3(web3.currentProvider);
                // Acccounts always exposed
                web3.eth.sendTransaction({/* ... */});
            }
            // Non-dapp browsers...
            else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        }); 
        window.web3 = this.web3;
        this.web3.eth.personal.getAccounts().then(accounts => {
            this.web3.eth.defaultAccount = accounts[0];
        })
        /* Parte JS para chamar o metamask */

        this.web3 = new Web3(this.web3.currentProvider);

        this.contract = new this.web3.eth.Contract(this.abi, this.address);
    }
    ionViewDidLoad(){
        
    }
    async criarEmpresa(){
    }
    async getEmpresa(){
        this.contract.methods.criarEmpresa([]).send()
    }
}