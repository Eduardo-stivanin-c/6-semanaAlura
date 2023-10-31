//Ternário (if e e else)

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
//não é protegido contra falsificaçã de idade
//if (IdadedoCliente >= IdadeMinima) {
 //   console.log("cerveja")
//}
//else{
 //   console.log('suco')
//}

//se verdeiro idademinima  cerveja senão  suco 


               // condição                   true      false
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido);