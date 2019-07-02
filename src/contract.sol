pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract PescaConsciente{
    struct Log{
        string data;
        bool empresaSelo;
        bool agentesSelo;
        bool agentesModif;
    }
    struct Empresa{
        string nome;
        Log[] logs;
    }
    mapping (address => Empresa) public empresas;
    //address[] public empresasAdds;
    address public manager;
    constructor() public{
        manager = msg.sender;
    }
    function criarEmpresa(string memory nome,address addEmpresa) public restricted{
        if(!compareStrings(nome, empresas[addEmpresa].nome)){
            empresas[addEmpresa];
            empresas[addEmpresa].nome = nome;
        }

    }
    function criarLog(address empresa, bool consciente, string memory data, bool agentes) public{
        Log memory aux;
        if(empresas[empresa].logs.length > 0){
            require(!compareStrings(data, empresas[empresa].logs[0].data));
        }
        if(agentes){
           aux.agentesSelo = consciente;
           aux.agentesModif = true;
        }
        else{
            aux.empresaSelo = consciente;
        }
         aux.data = data;
        empresas[empresa].logs.push(aux);
    }
    function verificarLog(address empresa, bool consciente, string memory data) public{
        uint tam = 14;
        bool tinhaLog = false;
        if(empresas[empresa].logs.length < tam){
            tam = empresas[empresa].logs.length;
        }
        for(uint i=0; i<tam; i++){
            if(compareStrings(data, empresas[empresa].logs[i].data)){
                empresas[empresa].logs[i].agentesSelo = consciente;
                empresas[empresa].logs[i].agentesModif = true;
                tinhaLog = true;
                break;
            }
        }
        if(!tinhaLog){
            criarLog(empresa,consciente, data, true);
        }
    }
    function getLogs(address adds) public view returns (Log[] memory){
        return empresas[adds].logs;
    }
    function compareStrings (string memory a, string memory b) public pure returns (bool) {
            return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
}