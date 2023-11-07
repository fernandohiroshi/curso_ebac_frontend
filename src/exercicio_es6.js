const alunos = [
    {nome: 'Fernando', nota: 9},
    {nome: 'Caroline', nota: 8},
    {nome: 'Rafael', nota: 7},
    {nome: 'Bianca', nota: 6},
    {nome: 'Batman', nota: 3},
]
function aprovados(notas) {
    return notas.filter(aluno => aluno.nota >= 6)
}
console.log(aprovados(alunos));

