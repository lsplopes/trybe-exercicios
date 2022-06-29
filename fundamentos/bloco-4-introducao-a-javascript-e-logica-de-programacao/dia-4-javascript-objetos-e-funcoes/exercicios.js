//EXERCICIO 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log('Bem-vinda, ' + info.personagem);

//EXERCICIO 2
info.recorrente = 'Sim';

//console.log(info);

//EXERCICIO 3
//for (let keys in info) {
//  console.log(keys);
//}

//EXERCICIO 4
//for (let keys in info) {
//  console.log(info[keys]);
//};

//EXERCICIO 5
//let info2 = {
//  personagem: 'Tio Patinhas',
//  origem: 'Christmas on Bear Mountain',
//  nota: "Dell's Four Color Comics #178, O último MacPatinhas",
//  recorrente: 'Sim',
//};
//
//for (let keys in info, info2) {
//  if (keys === 'recorrente' && info[keys] === 'Sim' && info2[keys] === 'Sim') {
//    console.log('Ambos recorrente');
//  }
//  else {
//  console.log(info[keys] + ' e ' + info2[keys]);
//  }
//}

//EXERCICIO 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//EXERCICIO 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});
//console.log(leitor);

//EXERCICIO 8



console.log(leitor.nome + ' tem ' +leitor.livrosFavoritos.length + ' livros favoritos');