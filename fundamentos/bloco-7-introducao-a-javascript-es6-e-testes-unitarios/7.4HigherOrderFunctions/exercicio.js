//EXERCICIO 1

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const cadastro = (name) => {
  const removeSpaces = name.toLowerCase().replace(/ /g, '_')
  const email = `${removeSpaces}@trybe.com.br`
  const objeto = {
    nomeCompleto: name,
    email: email,
  }
  return objeto
}

// console.log(newEmployees(cadastro));

//EXERCICIO 2
// entendi errado o exercicio e fiz assim
const resultado = (numero, sortfunc) => {
  if (numero === sortfunc) {
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente.'
  }
}

const sortfunc = () => Math.floor(Math.random() * 5 + 1);

// console.log(resultado(3, sortfunc()));

//vi o gabarito e refiz assim:

const checkerfunc = (number, sortido) => number === sortido;

const resultado2 = (number, checkerfuncpar) => {
  const checker = Math.floor(Math.random() * 5 + 1);
  return checkerfuncpar(number, checker) ? 'Parabéns você ganhou!' : 'Tente novamente.';;
}

// console.log(resultado2(5, checkerfunc));

//EXERCICIO 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checador = (resposta, gabarito) => {
  if (resposta === gabarito) {
    return 1;
  } else if (resposta === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

const hofFunc = (correctA, toBeChecked, answerChecker) => {
  let contagem = 0;
  for (let index = 0; index < correctA.length; index += 1) {
    const corretor = (answerChecker(toBeChecked[index], correctA[index]));
    contagem += corretor;
  }
  return contagem;
}

console.log(hofFunc(RIGHT_ANSWERS, STUDENT_ANSWERS, checador));