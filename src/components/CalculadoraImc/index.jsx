import { useState } from "react";

const CalculadoraImc = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const resultado = () => {
    const alturaEmMetros = altura.toString().includes(".")
      ? altura
      : altura / 100;
    const calc1 = alturaEmMetros * alturaEmMetros;
    const calc2 = peso / calc1;

    switch (true) {
      case calc2 < 18:
        return <p>Abaixo do peso</p>;
      case calc2 >= 18.1 && calc2 <= 29.9:
        return <p>Peso normal</p>;
        case calc2 > 30:
          return <p>Sobrepeso</p>;
      default:
        return <p>Sua Classificação</p>;
    }
  };
  return (
    <>
      <h1>Calculadora IMC</h1>
      <form>
        <input
          type="number"
          placeholder="Insira sua altura"
          required
          step="0.01"
          onChange={(evento) => setAltura(parseFloat(evento.target.value))}
        />{" "}
        {"   "}
        <input
          type="number"
          placeholder="Insira seu peso"
          required
          step="0.01"
          onChange={(evento) => setPeso(parseFloat(evento.target.value))}
        />
      </form>
      {resultado()}
    </>
  );
};

export default CalculadoraImc;
