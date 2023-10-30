//fundamentos-javascript-tipos-variaveis-funcoes
//1.5)

const idade = 28
const pi = 3.14


//bug conta divida por zero não existe en~ta da bug de vlaor infity

var a = 10
var b = 0
console.log(a/b) // Infinity

//bug divisão e mulçtiplicaçãopro zero sempre será zero mas da Not a Number (não é numero)
var a = 0
var b = 0
console.log(a/b) // NaN



const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false




const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)


let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10





//fundamentos-javascript-tipos-variaveis-funcoes/task/94131 
//