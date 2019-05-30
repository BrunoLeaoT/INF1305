pragma solidity >=0.4.22 <0.6.0;

contract pescaConsciente{
    struct Empresa{
        string nome;
        bool consciente;
    }
    Empresa[] public empresas;
    
    function criarEmpresa(string memory nome,bool status) public{
        Empresa memory aux;
        aux.nome = nome;
        aux.consciente = status;
        empresas.push(aux);
    }
    
    function verificarEmpresa(string memory nome) public view returns (bool){
        for (uint i; i< empresas.length;i++){
          if (compareStrings(empresas[i].nome, nome))
            return empresas[i].consciente;
      }
    }
    
  function compareStrings (string memory a, string memory b) public pure 
       returns (bool) {
            return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
       }
}