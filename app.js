let listaDeNumerosSorteados= [];
let numeroLimite=50;
let numeroSecreto=gerarAleatorio() ;
let tentativa=1

function exibirTextoNaTela (tag,texto) {
    let campo=document.querySelector(tag);
    campo.innerHTML= texto;
}
    mensagemInicial()

    function mensagemInicial(){
        exibirTextoNaTela ('h1','Jogo do Número secreto')
        exibirTextoNaTela ('p','Escolha um número de 1 à 10')
    }

function verificarChute(){
    let chute=document.querySelector('input').value
    
    if (chute==numeroSecreto){
        limpar()
        exibirTextoNaTela('h1','Parabéns ,você acertou');
        let palavraTentativa= tentativa>1?'tentativas':'tentativa';
        let mensagemTentativa= `O número secreto era ${numeroSecreto} , você acertou com ${tentativa} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
        
    }
    else {
        if (chute>numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor')
        }
        else{
            exibirTextoNaTela('p','O número secreto é maior')
        }
        tentativa++
        limpar()
    }


}
function gerarAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite+1)
    let quantidadeElementos=listaDeNumerosSorteados.length;

    if(quantidadeElementos==numeroLimite){
        listaDeNumerosSorteados=[]
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarAleatorio()
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log (listaDeNumerosSorteados)
        return numeroEscolhido
    }

}

function limpar(){
    chute=document.querySelector('input')
    chute.value=""
}

function novoJogo(){
    numeroSecreto=gerarAleatorio()
    mensagemInicial()
    limpar()
    document.getElementById('reiniciar').setAttribute('disabled',true)
    tentativa=1


}