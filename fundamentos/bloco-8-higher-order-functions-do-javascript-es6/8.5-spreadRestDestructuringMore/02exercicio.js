//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest.

const sum = (...array) => array.reduce((acc, curr) => acc + curr, 0);