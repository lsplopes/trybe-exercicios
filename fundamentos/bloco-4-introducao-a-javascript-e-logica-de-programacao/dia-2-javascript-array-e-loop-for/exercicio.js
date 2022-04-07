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
