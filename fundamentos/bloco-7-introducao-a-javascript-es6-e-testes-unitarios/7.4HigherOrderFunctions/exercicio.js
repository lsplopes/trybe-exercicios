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

const resultado = (numero, sortfunc) => {
  if (numero === sortfunc) {
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente.'
  }
} 

const sortfunc = () => Math.floor(Math.random() * 5 + 1);

// console.log(resultado(3, sortfunc()));

const checkerfunc = (number, sortido) => number === sortido;

const resultado2 = (number, checkerfuncpar) => {
  const checker = Math.floor(Math.random() * 5 + 1);
  return checkerfuncpar(number, checker) ? 'Parabéns você ganhou!' : 'Tente novamente.';;
}

console.log(resultado2(5, checkerfunc))