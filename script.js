/*Exercício 1
Declare uma função que imprima no console a frase "Olá Mundo!"
Chame a função!
*/

/*
function ola() {
    console.log("Olá Mundo!");
}

ola();
*/

/*Exercício 2
Crie uma função que receba por parâmetro um nome e imprima no console a mensagem: `Olá ${nome}`
Invoque esta função 3 vezes, passando 3 argumentos (nomes) diferentes
*/

/*
function olapessoa(nome) {
    console.log(`Olá, ${nome}!`);
}

olapessoa("Clara");
olapessoa("Katia");
olapessoa("Evandro");
*/

/*Exercício 3
Refaça o exercício anterior com a sintaxe de expressão de função (função não-nomeada)
*/

/*
const olapessoa = function(nome) {
    console.log(`Olá, ${nome}!`);
}

olapessoa("Clara");
olapessoa("Katia");
olapessoa("Evandro");
*/

/*Exercício 4
Crie uma função que receba dois números e retorne a soma entre eles
Guarde o retorno dessa função em uma variável e imprima no console
*/

/*
function soma(num1, num2) {
    return num1 + num2;
}

const resultadoSoma = soma(3, 3);
console.log(resultadoSoma);
*/

/*Exercício 5
Refaça o exercício anterior com a sintaxe de Arrow Function
*/

/*
const soma = (num1, num2) => {
    return num1 + num2;
}

const resultadoSoma = soma(3, 3);
console.log(resultadoSoma);
*/

/*Exercício 6
Crie uma função que receba um array de números e retorne um novo array apenas com o primeiro e o último número
*/

/*
const numeros = [1, 2, 3, 4];
const primeiroEUltimo = []; 

function primeiroEUltimoNumeros (arrayOriginal, novoArray) {
    novoArray.push(arrayOriginal[0], arrayOriginal[arrayOriginal.length-1]);
    return novoArray;
}

console.log(primeiroEUltimoNumeros(numeros, primeiroEUltimo));
*/

/*Exercício 7
Crie uma função que receba um array de números como parametro e retorne um novo array apenas com os números pares
*/

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numerosPares = [];

function apenasNumerosPares (arrayOriginal, novoArray) {
    for (i of arrayOriginal) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    return novoArray;
}

console.log(apenasNumerosPares(numeros, numerosPares));
*/

/*Exercício 8
Declare uma função que:
Receba um array de números
Retorne um novo array com dois elementos: o último e o primeiro número do array recebido divididos por 2
Chame a função com 2 arrays diferentes
*/
/*
const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];
const paresUltEPrimMetade = [];
const imparesUltEPrimMetade = [];

function ultimoEPrimeiroDiv2 (arrayOriginal, novoArray) {
    novoArray.push(arrayOriginal[arrayOriginal.length-1]/2, arrayOriginal[0]/2);
    return novoArray;
}

console.log(ultimoEPrimeiroDiv2(numerosPares, paresUltEPrimMetade));
console.log(ultimoEPrimeiroDiv2(numerosImpares, imparesUltEPrimMetade));
*/