import * as Web3 from 'web3';

window.addEventListener('load', async() => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed

        } catch (error) {
            // User denied account access...
        }
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8100'));
}
const defaultAccount
ethereum.enable().then((account) => {
    defaultAccount = account[0];
    web3.eth.defaultAccount = defaultAccount;
})

var address = '0x50197ba73da446238fb80dff64bc17c553ff7f5e';
var abi = [{
        "constant": false,
        "inputs": [{
                "name": "nome",
                "type": "string"
            },
            {
                "name": "addEmpresa",
                "type": "address"
            }
        ],
        "name": "criarEmpresa",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "empresa",
                "type": "address"
            },
            {
                "name": "consciente",
                "type": "bool"
            },
            {
                "name": "data",
                "type": "string"
            },
            {
                "name": "agentes",
                "type": "bool"
            }
        ],
        "name": "criarLog",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "empresa",
                "type": "address"
            },
            {
                "name": "consciente",
                "type": "bool"
            },
            {
                "name": "data",
                "type": "string"
            }
        ],
        "name": "verificarLog",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "a",
                "type": "string"
            },
            {
                "name": "b",
                "type": "string"
            }
        ],
        "name": "compareStrings",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "empresas",
        "outputs": [{
            "name": "nome",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "adds",
            "type": "address"
        }],
        "name": "getLogs",
        "outputs": [{
            "components": [{
                    "name": "data",
                    "type": "string"
                },
                {
                    "name": "empresaSelo",
                    "type": "bool"
                },
                {
                    "name": "agentesSelo",
                    "type": "bool"
                },
                {
                    "name": "agentesModif",
                    "type": "bool"
                }
            ],
            "name": "",
            "type": "tuple[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "manager",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

var contract = new web3.eth.Contract(abi, address);

export default contract;