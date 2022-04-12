// EXERCICIO 1

//function verificapalindrome(palavra) {
//  let arrayDaPalavra = palavra.split('');
//  let palavraReverse = arrayDaPalavra.reverse();
//  let palindromePalavra = palavraReverse.join('');
//  if (palindromePalavra === palavra) {
//    console.log(true);
//  }
//  else {
//    console.log(false);
//  }
//}
//
//verificapalindrome('lucas');
//verificapalindrome('arara');

//EXERCICIO 2
//let arrayDeNumbers = [2, 3, 6, 7, 10, 1];


//function indiceMaiorValor(arrayDeNumbers) {
//  let maiorIndex = 0
//  let maiorNumber = 0;
//  for (index = 0; index < arrayDeNumbers.length; index += 1) {
//      if (arrayDeNumbers[index] > maiorNumber) {
//      maiorNumber = arrayDeNumbers[index];  
//      maiorIndex = index;
//    }
//  }
//  console.log(maiorIndex);
//}
//

//EXERCICIO 2 FEITO APÓS ENTENDER O GABARITO

//function indiceMaiorValor (array) { //criei a function
//  let indiceMaior = 0 //criei armazenador do maior indice
//  for (let indice in array) {//criei o for para percorrer o array inteiro
//    if (array[indiceMaior] < array[indice]) {//criei um comparador que vai avaliar o array na posição guardada e o array na posição do indice
//      indiceMaior = indice;//se o array na posição guardada for menor que o array na posição do indice, vou substituir o armazenador do maior indice para o indice que possua o maior valor.
//  }//fecho o meu if
//  }//fecho o meu for
//return indiceMaior;//dentro da function, eu retorno o valor que eu queria encontrar
//}//fecho minha function
//console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1])); //exibo o resultado da minha função para o array que apresentei.

//EXERCICIO 3

//function indiceMenorValor(array) {
//  let indiceMenor = 0;
//  for (let indice in array) {
//    if (array[indiceMenor] > array[indice]) {
//      indiceMenor = indice;
//    }
//  }
//return indiceMenor
//}
//console.log(indiceMenorValor([2, 4, 6, -7, 10, 0, -3]));

//EXERCICIO 4

//function maiorNomeDado(arrayDeNomes) {
//  let indiceMaiorNome = 0;
//  for (let indice in arrayDeNomes) {
//    if (arrayDeNomes[indiceMaiorNome].length < arrayDeNomes[indice].length) {
//      indiceMaiorNome = indice;
//    }
//  }
//return arrayDeNomes[indiceMaiorNome];
//}
//
//console.log(maiorNomeDado(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//EXERCICIO 5

//function fuMaisRepetido(array) {
//  let maisRepetido = 0;
//  for (let indice in array) {
//    let contador = 0;
//    for (let indice2 in array) {
//      if (array[indice2] === array[indice]) {
//        contador += 1;
//      }
//    }
//    if (contador > maisRepetido) {
//      maisRepetido = indice;
//    }
//  }
//return array[maisRepetido];
//}
//console.log(fuMaisRepetido([2, 3, 2, 5, 8, 2, 3]));

// EXERCICIO 6

//function somaInferiores (numero) {
//  let somatorio = numero;
//  for (index = 1; index < numero; index += 1) {
//    somatorio += numero - index;
//  }
//return somatorio;
//}
//
//console.log(somaInferiores(5));

// EXERCICIO 7


function verificaFimPalavra(word, ending) {
  let backWord = word.split('').reverse();
  let backEnding = ending.split('').reverse();
  let verification = false;
  for (index = 0; index < ending.length; index += 1) {
    if (backEnding[index] === backWord[index]) {
      verification = true;
    }
    else {
      break
    }
  }
  console.log(verification);
}
verificaFimPalavra('trybe', 'by');