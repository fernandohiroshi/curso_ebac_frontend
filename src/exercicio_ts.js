"use strict";
// • Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
const multiplica = (x, y) => x * y;
console.log(multiplica(4, 8));
function saudacao(nome) {
    return console.log('Olá ' + nome);
}
;
saudacao('Fernando');
