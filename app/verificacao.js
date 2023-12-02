function verificaChute(chute){
    const numero = +chute;

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return
    }

    if (intervaloChute(numero)){
        elementoChute.innerHTML += `<div>Valor fora do intervalo: Fale um número entre ${menorValor} e ${maiorValor}`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML=`
        <h2>Você acertou! </h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if( numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>'
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function intervaloChute(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});