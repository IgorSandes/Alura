let listasDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Adivinhe o número secreto entre 1 e 10!');
}
mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavra = tentativas > 1 ? 'tentativas':'tentativa';

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', `Acertou com ${tentativas} ${palavra}!`);
        exibirTextoNaTela('p', 'PARABÉNS !!!')
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute < numeroSecreto){
         exibirTextoNaTela('p', `O número secreto é maior que ${chute}!`);
        } else{
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosNaLista = listasDeNumerosSorteados.length;

    if (qtdElementosNaLista == numeroLimite){
        listasDeNumerosSorteados = [];
    }

    if (listasDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listasDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}