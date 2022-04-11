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
for (let keys in info) {
  console.log(info[keys]);
};