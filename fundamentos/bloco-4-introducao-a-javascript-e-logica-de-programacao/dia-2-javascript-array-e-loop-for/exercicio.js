// exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += 0 + numbers[i];
}
console.log(soma);

//exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += 0 + numbers[i];
}
let media = soma / numbers.length;
console.log(media);

// exercicio 4

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

// exercicio 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigger = 0;

for (let i = 0; i < numbers.length; i++) {
  if (bigger < numbers[i]) {
    bigger = numbers[i];
  }
}
console.log(bigger);

// exercicio 6

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

// exercicio 7

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

for (let index = 0; index < 25; index +=1) {
  numbers.push(index+1);
}
console.log(numbers);

// diferença pro gabarito é que eu já comecei no zero e fui somando 1.. o gabarito começa com 1 e vai dando push no index direto... é mais eficaz com certeza.

//