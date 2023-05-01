let valor1 = 9.5;

let arredondarBaixo = Math.floor(valor1); //Arredondando o valor para o mais baixo
let arredondarCima = Math.ceil(valor1); //Arredondando o valor para o mais alto
let arredondarProximo = Math.round(valor1); //Arredondando o valor para o mais próximo.

// console.log(arredondarBaixo);
// console.log(arredondarCima);
// console.log(arredondarProximo);


// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //Mostra o maior numero da sequencia.
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //Mostra o menor numero da sequencia.

const aleatorio = Math.round(Math.random() * (1000 - 0) + 0);
console.log(aleatorio);