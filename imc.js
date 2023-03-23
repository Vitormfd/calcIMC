const form = document.querySelector('.form');//seleciona a classe no html
const peso = document.querySelector('.calc-peso');//seleciona a classe no html
const altura = document.querySelector('.calc-alt');//seleciona a classe no html
let resultado; //cria a variavel do calculo
function recebeEventoForm(evento) {
    evento.preventDefault();
    console.log(peso.value, altura.value);
    const alturtaEmMetros = altura.value / 100;
    resultado = peso.value / (alturtaEmMetros ** 2);
    console.log(alturtaEmMetros);
    console.log(resultado.toFixed(2));

    const resultFixed = resultado.toFixed(2);

    if (resultFixed < 18.5) {
        alert(resultFixed + ' => Está abaixo do peso!');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        alert(resultFixed + ' => Seu peso está normal!');
    } else if (resultado >= 25 && resultado <= 29.9) {
        alert(resultFixed + ' => Voce está com sobrepreso!');
    } else if (resultado >= 30 && resultado <= 34.9) {
        alert(resultFixed + ' => Voce está com obesidade grau 1!');
    } else if (resultado >= 35 && resultado <= 39.9) {
        alert(resultFixed + ' => Voce está com obesidade grau 2!');
    } else if (resultado > 40) {
        alert(resultFixed + ' => Voce está com obesidade grau 3!');
    }



}
form.addEventListener('submit', recebeEventoForm);//impede da pagina atualizar ao enviar o formulario
console.log('');
