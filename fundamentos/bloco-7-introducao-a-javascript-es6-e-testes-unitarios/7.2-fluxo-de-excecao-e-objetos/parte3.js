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
// console.log(noiteDois(lesson2, 'turno', 'noite'));

const listKeys = (objeto) => console.log(Object.keys(objeto));
// listKeys(lesson1);

const keyLength = (objeto) => console.log(Object.keys(objeto).length);
// keyLength(lesson1);

const listValues = (objeto) => console.log(Object.values(objeto));
// listValues(lesson1);

// EXERCICIO 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});

// console.log(allLessons);

//EXERCICIO 6

const totalStudents = (object) => {
  const lesson1 = Object.values(object.lesson1);
  const lesson2 = Object.values(object.lesson2);
  const lesson3 = Object.values(object.lesson3);
  const totalStudent = lesson1[1] + lesson2[1] + lesson3[1];
  return totalStudent
}
// console.log(totalStudents(allLessons));

//EXERCICIO 7

const valueByPosition = (lesson, position) => {
  const lessonSearch = Object.values(lesson);
  const output = lessonSearch[position];
  return output  
}
// console.log(valueByPosition(lesson1, 0));

//EXERCICIO 8

const verifyPair = (objeto, chave, valor) => {
  const arrayObject = Object.entries(objeto);
  for (let index = 0; index < arrayObject.length; index += 1) {
    console.log(arrayObject[index][0]);
    console.log(arrayObject[index][1]);
    if (arrayObject[index][0] === chave && arrayObject[index][1] === valor) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result
}
// console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));