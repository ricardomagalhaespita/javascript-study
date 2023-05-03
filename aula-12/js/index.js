//            1234567890
const nome = 'Ricardo Magalhães Pita';
//               0,        1,        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]); //Exibe valor especifico da lista.
console.log(alunos); //Exibe toda a lista.

alunos[0] = 'Super RM'; //Altera o valor de uma posição

console.log(alunos.length); //Informa o tamanho da lista.

alunos.unshift('Teste01'); //Adiciona no inicio
alunos.push('Teste02'); //Adiciona no final
const removido = alunos.pop(); //Remove o ultimo.
console.log(removido);