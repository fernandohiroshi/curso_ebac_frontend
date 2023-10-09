function Pokemon(nome) {
    this.nome = nome;
};

// herdeiro 1
function PokeInfo(nome, tipo, level) {
    this.tipo = tipo;
    this.level = level;

    Pokemon.call(this, nome)
};

// herdeiro 2
function PokeAttacks(nome, at1, at2, at3, at4) {
    this.at1 = at1;
    this.at2 = at2;
    this.at3 = at3;
    this.at4 = at4;

    Pokemon.call(this, nome)
};



const poke = new Pokemon('pikachu');
const info = new PokeInfo('pikachu', 'eletrico', 81);
const attacks = new PokeAttacks('pikachu', 'choque do trovao', 'esquivar', 'morder', 'surfar');

console.log(poke);
console.log(info);
console.log(attacks);
