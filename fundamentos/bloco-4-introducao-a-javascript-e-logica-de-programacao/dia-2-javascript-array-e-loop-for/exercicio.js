// exercicio 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// crio um loop que percorre o array valor por valor
//incremento a variavel que vai consolar cada valor do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) { 
  console.log(numbers[i]);
}

// exercicio 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// criei primeiro o loop para percorrer todos valores da variavel
//adiciono uma variavel que vai guardar (criei antes para ja deixar ela existente)
// incremento a variavel que vai somar cada numero percorrido baseado em seu indice
// encerro o loop e coloco para imprimir apenas apos concluido o loop, para aparecer o valo da soma uma só vez.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += 0 + numbers[i];
}
console.log(soma);

//exercicio 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// sabendo que vou precisar calcular a media e que já fiz a soma de todos no exercicio anterior:
// sigo todo algoritmo do exercicio anterior
// após ele, removo a impressão da soma e crio uma variavel média, onde dentro dela eu calculo o valor da soma obtida divido pela quantidade de elementos do array
// depois imprimo o resultado da variavel media

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += 0 + numbers[i];
}
let media = soma / numbers.length;
console.log(media);

// exercicio 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// seguinto o algoritmo anterior, removo o console da media
//crio uma estrutura condicional para caso a media seja maior que 20
// atribuo para essa condição que caso verdadeira, imprima que o valor é maior que 20
// crio outra condicional que caso não atenda a primeira (não ser maior que 20 então vai ser menor ou igual) imprimo o que ela é menor ou igual a 20;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += 0 + numbers[i];
}
let media = soma / numbers.length;

if (media > 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20");
}

// exercicio 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// crio uma variavel que vai guardar o valor do maior elemento do array
// crio um loop para percorrer todos elementos;
// crio uma condicional para que caso o elemento percorrido pelo loop seja maior que o valor guardado na variavel criada, ele substitui o valor da variavel criada pelo maior elemento do array
//imprimo o resultado do maior valor passado pelo loop.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigger = 0;

for (let i = 0; i < numbers.length; i++) {
  if (bigger < numbers[i]) {
    bigger = numbers[i];
  }
}
console.log(bigger);

// exercicio 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// crio o contador de impares
// crio o loop para percorrer todos os arrays
//crio o incremento para cada elemento percorrido onde dentro dele, crio outra variavel que calcula o resto da divisão do elemento por 2
// crio uma condicional onde caso este valor seja diferente de zero, o contador de impares incrementa 1
//com a quantidade de impares disponivel apos o loop e a condicionante, crio outra condicionante onde
// caso a quantidade de impares contados seja maior que zero, ele imprime esta quantidade
//caso não seja mair que zero, imprime alertando que nenhum valor impar foi encontrado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdimpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  let comparador = numbers[index] % 2;
  if (comparador !== 0) {
    qtdimpar += 1;
  }  
}

if (qtdimpar > 0) {
  console.log(qtdimpar);
}
else {
  console.log('nenhum valor impar encontrado')
}

// exercicio 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

//já existindo o algoritmo pra desocobrir o maior valor da variavel
// crio um contador de menor valor e atribuo o valor do maior elemnto já calculado
//crio um loop que percorre novamente os elementos do array
// crio uma condicionante onde caso a variavel criada (agora com o numero do maior valor) seja maior que o numero do array que está deste loop, ela substitui o valor pela variavel do loop
//imprimo o resultado.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigger = 0;

for (let i = 0; i < numbers.length; i++) {
  if (bigger < numbers[i]) {
    bigger = numbers[i];
  }
}

let smaller = bigger;

for (let i = 0; i < numbers.length; i++) {
  if (smaller > numbers[i]) {
    smaller = numbers[i];
  }
}
console.log(smaller);

//achei que eu precisava saber primeiro qual era o maior pra aí poder comparar.. vendo o gabarito, refiz:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smaller = numbers[0]; //assim ao invés de comparar a partir do maior numero, eu comparo numero por numero e escolho o menor

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smaller) {
    smaller = numbers[index]
  }
}
console.log(smaller);

// Exercicio 8

let numbers = [];

for (let index = 0; index < 25; index += 1) {
  numbers.push(index + 1);
}
console.log(numbers);

// diferença pro gabarito é que eu já comecei no zero e fui somando 1.. o gabarito começa com 1 e vai dando push no index direto... é mais eficaz com certeza.

// exercicio 9

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
}
