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
