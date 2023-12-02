const menorValor = 1;
const maiorValor = 50;
const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor);
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;

function gerarNumeroAleatorio(menorValor, maiorValor){
    const valor = parseInt(Math.random()*(maiorValor-menorValor+1)+menorValor);
    console.log(valor);
    return valor
}


