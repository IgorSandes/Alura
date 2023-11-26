alert('Seja bem vindo ao nosso jogo do número secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let acertou = false;
let tentativas = 1;
console.log(tentativas)
while (acertou == false){
    let numeroUsuário = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (numeroSecreto == numeroUsuário){    
        alert(`Parabéns, você acertou! O número secreto é ${numeroSecreto}! ${tentativas} ${palavraTentativa}!`);
        acertou = true;
    } else {
        if(numeroUsuário > numeroSecreto){
            alert(`O número ${numeroUsuário}, é maior que o número secreto!`);
        }else{
            alert(`O número ${numeroUsuário}, é menor que o número secreto!`);
        }
        tentativas ++;
    }
}
    