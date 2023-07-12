
function somar(n1, n2) { // Entrada
    let soma = n1 + n2; // Processamento
    return soma; // Saída
}

// function dividir(num, den) {
//     if(den == 0)
//         return; // Retorno vazio é válido
//     return (num / den);
// }

// const num = dividir(22, 0);
// console.log(num);


// callback -> função que passado como parametro de outra função

function requisicaoParaBanco(callbackSuccess, callbackError) {
    let resultados = 0;
    for(let i = 0; i < 10000000; i++) { // requisição feita para o servidor (simulção)
        resultados += i;
        if(i === -1000) { // aqui gerou um erro
            callbackError();
        }
    }
    callbackSuccess(resultados);
}

function sucesso(res) {
    console.log("Ta ai os resultados!");
    console.log(res);
}

function erro() {
    numError++;
    console.log("Houve erro A Companhia SoulCode pede desculpas!");
}

// requisicaoParaBanco(sucesso, erro);



// Função Anônima
// setTimeout(function() { // após 3000 milisegundos ele irá executar a função anonima
//     console.log("Olá, Mundo com SetTimeout.");
// }, 3000);

// setInterval(function() { // a cada 2000 milisegundos ele irá executar a função anonima
//     console.log("Olá, Mundo com SetInterval.");
// }, 2000);

// Função Anonima
// let funAno = function() {
// }

// Função de Seta
// let funAno = () => {
// }

// Função Expression
// function funAno() {
// }


// Arrow Functions -> Funções de Seta -> Funções Anônimas
// setTimeout(function() {
//     console.log("SetTimeout com Função Anônima");
// }, 2000);

setTimeout(() => {
    console.log("SetTimeout com Função Arrow");
}, 2000);

// function() {
// }

// () => {
// }


//parametros => escopo/intrução
(resultado, requisicao) => {
    console.log(resultado + " " + requisicao)
    return 0;
}