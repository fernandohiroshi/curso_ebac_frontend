function Funcionarios(nome, salario, cargo, nivel) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
    this.nivel = nivel;
};

// Funcionarios:
const f1 = new Funcionarios('joao', 10000, 'gerente', 'senior');
const f2 = new Funcionarios('Fernando', 8000, 'programador', 'pleno');
const f3 = new Funcionarios('Carolina', 6000, 'designer', 'jr');


console.log(f1);
console.log(f2);
console.log(f3);


