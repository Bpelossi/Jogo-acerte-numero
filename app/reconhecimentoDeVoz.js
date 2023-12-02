const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result',onSpeak);


var dicionario = {
    "1": 'um',
    "2": 'dois',
    "3": 'três',
    "4": 'quatro',
    "5": 'cinco',
    "6": 'seis',
    "7": 'sete',
    "8": 'oito',
    "9": 'nove',
};

function onSpeak(e) {
    resultado = e.results[0][0].transcript;
    if(resultado=='parar'){
        fimDeJogo();
        return
    }
    for (var substituto in dicionario) {
        resultado = resultado.replace(dicionario[substituto], substituto);
    }
    chute = parseInt(resultado);
    exibeChute(chute);
    verificaChute(chute);
}

function exibeChute(chute) {
    chute = !Number.isNaN(chute) ? chute : '-'
    elementoChute.innerHTML = `
    <div>Você disse: </div> 
    <span  class="box">${chute}</span>
    `;

}

recognition.addEventListener('end',() => {
    recognition.start();
})

function fimDeJogo() {
    document.body.innerHTML=`
        <h2>Fim de jogo! </h2>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
}
