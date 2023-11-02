// Exercício Módulo 25:

// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 


const prompt = require('prompt-sync')(); // instalar: npm i prompt-sync

function Aluno(nome, nota) {
    if (nota <= 6) {
        console.log(`Aluno ${nome} está reprovado!`);
    } else {
        console.log(`Aluno ${nome} está aprovado!!`);
    }
};
const nomeDoAluno = prompt('Nome do aluno(a) ? ');
const notaDoAluno = Number(prompt('Nota do aluno(a) ? '));
Aluno(nomeDoAluno, notaDoAluno);