// exercicio 1 - 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

//resolução

//let arraydezfat = [10];
//
//for (index = 0; index < arraydezfat[0] - 1; index += 1) {
//  arraydezfat.push(arraydezfat[index]-1);
//}
//console.log(arraydezfat);
//
//let fatorial = 10;
//
//for (index = 0; index < arraydezfat.length - 1; index +=1) {
//  fatorial *= (arraydezfat[index] - 1);
//  
//}
//console.log(fatorial);

//##############################################################3
// EXERCICIO 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Tryber';
let arrayword = [];
for (let letters of word) {
  arrayword.push(letters);
}
console.log(arrayword);

arrayword.reverse();

console.log(arrayword);

let reverseword = arrayword.toString();

reverseword = reverseword.replace(/,/g, '');

console.log(reverseword);