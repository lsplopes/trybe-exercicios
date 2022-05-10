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

let noiteDois = (objeto1, chave1, valor) => {
  const chaveA = chave1;
  const valorA = valor;
  objeto1[chaveA] = valorA;
  return objeto1;
}
console.log(noiteDois(lesson2, 'turno', 'noite'));