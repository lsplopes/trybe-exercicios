const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const noiteDois = (objeto1, chave1, valor) => {
 const chaveA = chave1;
 const valorA = valor;
 objeto1[chaveA] = valorA;
 return objeto1;
}
console.log(noiteDois(lesson2, 'turno', 'noite'));

const listKeys = (objeto) => console.log(Object.keys(objeto));
listKeys(lesson1);

const keyLength = (objeto) => console.log(Object.keys(objeto).length);
keyLength(lesson1);

const listValues = (objeto) => console.log(Object.values(objeto));
listValues(lesson1);

// EXERCICIO 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});

console.log(allLessons);