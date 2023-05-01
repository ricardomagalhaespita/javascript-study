const nome = 'Ricardo'; // Constante não possui valor variável, é declarado, e fim.
//console.log(nome);

// -----------

const primeiroValor = 10;
const segundoValor = 10;
const resultado = primeiroValor * segundoValor;
console.log('Este é o resultado da multiplicação:',resultado);

// -----------
const sobrenome = 'Magalhães Pita'; // const = constante
const idade = 20;
const peso = 90;
const altura = 1.79;
let imc = peso / (altura*altura); // let = variável 
let anoNascimento = 2023 - idade;
/*
console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg');
console.log('tem',altura,'de altura e seu IMC é de',imc);
console.log(nome, 'nasceu em',anoNascimento);
*/
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
