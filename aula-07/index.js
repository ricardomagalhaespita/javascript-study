// alert('Aperte em "OK"');
// window.alert('Teste');
// window.confirm('Deseja realmente fazer isso?');
// window.prompt('Digite o seu nome: ');
// const resultado = primeiroValor + segundoValor;
// window.alert(`O resultado da conta é: ${resultado}`);


let primeiroValor = prompt('Digite o primeiro valor: ');
let segundoValor = prompt('Digite o segundo valor: ');
let tipoConta = prompt('Digite o tipo de conta que deseja fazer: ')
let resultado;

primeiroValor = Number(primeiroValor);
segundoValor = Number(segundoValor);


if(tipoConta == '+'){
resultado = primeiroValor + segundoValor;
window.alert(`O resultado da soma é: ${resultado}`);
}
else if(tipoConta == '-'){
resultado = primeiroValor - segundoValor;
window.alert(`O resultado da subtração é: ${resultado}`);
}
else if(tipoConta == '*'){
resultado = primeiroValor * segundoValor;
window.alert(`O resultado da multiplicação é: ${resultado}`);
}
else if(tipoConta == '/'){
resultado = primeiroValor / segundoValor;
window.alert(`O resultado da divisão é: ${resultado}`);
}

