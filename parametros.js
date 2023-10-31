
//3 formas de  escrever uma função
//paragmetros de funções são parametros ra ela receber
               //2     //2

//console.log(soma(2,2));
//console.log(soma(245,20));
//console.log(soma(500,60));


//parametros e argumentos
/*
function nomeIdade(nome,idade) {
    return `meu nome é ${nome} e minha idade é ${idade} `  
}*/

function soma(numero1,numero2) {
    
    //resultado exibido np o return reotrno
    return numero1 +numero2;
}
//console.log(nomeIdade(40,'Juliana'))


function multiplica(numero1=1,numero2=1) {
    //se argumneto indefinido será 1 por padrão nosso
    return numero1 * numero2;
}  
                 //       9          6   
console.log(multiplica(soma(4,5)))