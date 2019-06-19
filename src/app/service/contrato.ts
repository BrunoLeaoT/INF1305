import web3 from './web3';

var address= '0xb747ac428148de26b725c5dd6a05d64537fa432f';
var abi = [
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

export default new web3.eth.Contract(abi, address);