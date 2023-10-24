let listaNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroRandom();
let tentativas = 1;

function exibirTxtNaTela(tag, texto) { 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function exibirTextoInicial(){
    exibirTxtNaTela("h1", "Jogo do número secreto");
    exibirTxtNaTela("p", "Escolha um número de 1 e 10");
}

exibirTextoInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;

    if ( chute == numeroSecreto) {
        exibirTxtNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTxtNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (chute > numeroSecreto) {
            exibirTxtNaTela("p", "O número é menor");
        } else {
            exibirTxtNaTela("p", "O número é maior");
        }
        tentativas++;
        limparCampo();
    }
}
 
function gerarNumeroRandom() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroRandom();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log (listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroRandom();
    limparCampo();
    exibirTextoInicial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled",true)
}
