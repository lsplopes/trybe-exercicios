//EXERCICIO 1

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

//EXERCICIO 2

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//EXERCICIO 3

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//EXERCICIO 4

function encode(stringEntrada) {
  stringEntrada = stringEntrada.split("");
  for (let indice in stringEntrada) {
    if (stringEntrada[indice] === "a") {
      stringEntrada[indice] = 1;
    }
    else if (stringEntrada[indice] === "e") {
      stringEntrada[indice] = 2;
    }
    else if (stringEntrada[indice] === "i") {
      stringEntrada[indice] = 3;
    }
    else if (stringEntrada[indice] === "o") {
      stringEntrada[indice] = 4;
    }
    else if (stringEntrada[indice] === "u") {
      stringEntrada[indice] = 5;
    }
  }
  stringEntrada = stringEntrada.join('');
  return stringEntrada
}

function decode(stringSaida) {
  stringSaida = stringSaida.split("");
  for (let indice in stringSaida) {
    if (stringSaida[indice] === '1') {
      stringSaida[indice] = 'a';
    }
    else if (stringSaida[indice] === '2') {
      stringSaida[indice] = 'e';
    }
    else if (stringSaida[indice] === '3') {
      stringSaida[indice] = 'i';
    }
    else if (stringSaida[indice] === '4') {
      stringSaida[indice] = 'o';
    }
    else if (stringSaida[indice] === '5') {
      stringSaida[indice] = 'u';
    }
  }
  stringSaida = stringSaida.join('');
  return stringSaida
}

//EXERCICIO 5

function techList(arrayTech, name) {
  arrayTech.sort();
  if (arrayTech.length === 0) {
    return "Vazio!"
  }
  else if (arrayTech.length !== 0) {    
    let objetos = [];
    for (let index in arrayTech) {
      objetos.push({
        tech: arrayTech[index],
        name: name,
      })
    }
    return objetos;
}
}

//EXERCICIO 6

function hydrate(str) {
  numbers = str.match(/\d/g);
  let contador = 0;
  for (let index in numbers) {
    contador += parseFloat(numbers[index]);
  }
  if (contador > 1) {
    return contador + ' copos de água'
  }
  else {
    return contador + ' copo de água'
  }
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };