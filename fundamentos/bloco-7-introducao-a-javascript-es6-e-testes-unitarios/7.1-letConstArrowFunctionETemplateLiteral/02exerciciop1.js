//Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

//Modifique a estrutura da função para que ela seja uma arrow function.

//Modifique as concatenações para template literals.
//
//function testingScope(escopo) {
//  if (escopo === true) {
//    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//    console.log(ifScope);
//  } else {
//    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//    console.log(elseScope);
//  }
//  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//}
//
//testingScope(true);
//
// Resolução

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope); 
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }  
}
testingScope(true);

//EXERCICIO 2

//Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

//Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

//Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

//const oddsAndEvens = [13, 3, 4, 10, 7, 2];
//
//const crescente = () => {
//  oddsAndEvens[0] = 2;
//  oddsAndEvens[1] = 3;
//  oddsAndEvens[2] = 4;
//  oddsAndEvens[3] = 7;
//  oddsAndEvens[4] = 10;
//  oddsAndEvens[5] = 13;
//  return oddsAndEvens
//}
//
//const arrayCrescente = crescente();
//
//console.log(`Os números ${arrayCrescente} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// exercicio 2 resolvido no modo bonus (apenas para estudar depois)

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

//PARTE 2 - EXERCICIOS

//EXERCICIO 1

//Crie uma função que receba um número e retorne seu fatorial.
//Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (num) => {
  let contador = 1;
  for (let index = 2; index <= num; index += 1) {
    contador *= index;
  }
  return contador;
}
console.log(fatorial(5));


// EXERCICIO 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

let frase = 'será que isso vai dar certo'

const palavrau = (vaca) => {
  let arrayDaFrase = vaca.split(' ');
  let maior = 0;
  let resultado;

  for (let palavra of arrayDaFrase) {
    if(palavra.length > maior) {
      maior = palavra.length
      resultado = palavra;
    }
  }
  return resultado
}

console.log(palavrau(frase));

/*EXERCICIO 4 
Crie um código JavaScript com a seguinte especificação:

Não se esqueça de usar template literals
Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

Exemplo:

String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"

Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.*/






/* Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
Exemplo:
"Tryber x aqui!
Minhas cinco principais habilidades são:
JavaScript;
HTML; ...*/

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function subX (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(subX("Lucas"));

