function cumprimentar(){
 console.log('oi gente!')
}

cumprimentar();


   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
 //  cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90

function comParametro(param) {
    console.log(param)
}
comParametro()