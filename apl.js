//function exibirOla() {
//    console.log ("Ola Mundo!");
//}

//exibirOla();


function exibirOlaNome(nome) {
    console.log (`Olá ${nome}`);
}

exibirOlaNome("João");

function numeroDobro(numero) {
    return numero * 2;
}

let resultado = numeroDobro(1);
console.log (resultado);

function mediaNumeros(a,b,c) {
    return (a + b + c) / 3; 
}

let media = mediaNumeros(2,4,8)
console.log (media);

function numeroMaior(a,b) {
   return a > b ? b : a ;
}

let maior = numeroMaior(9,6);
console.log (maior);

