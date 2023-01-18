const frm = document.querySelector('form');
const respOut = document.querySelector('#outResposta');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputCampoA = Number(frm.campoA.value);
    const inputCampoB = Number(frm.campoB.value);

    function validaCampo() {

        if (inputCampoA > inputCampoB) {
            respOut.innerText = `ERRO!!! O valor do campo A deve ser menor que o campo B.`;
            document.querySelector('#outResposta').style.display = 'block';
            document.querySelector('#outResposta').style.background = 'red';
            document.querySelector('#outResposta').style.color = 'white';

        } else {
            respOut.innerText = `CONCLUIDO!!! Formulário Validado \n bye bye!`;
            document.querySelector('#outResposta').style.display = 'block';
            document.querySelector('#outResposta').style.background = 'green';
            document.querySelector('#outResposta').style.color = 'white';


            frm.campoA.value = ' ';
            frm.campoB.value = ' ';
        }
    }

    validaCampo();

})