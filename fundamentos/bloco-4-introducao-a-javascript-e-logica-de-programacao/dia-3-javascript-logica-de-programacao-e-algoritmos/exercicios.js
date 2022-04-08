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

//let word = 'Tryber';
//let arrayword = [];
//for (let letters of word) {
//  arrayword.push(letters);
//}
//console.log(arrayword);
//
//arrayword.reverse();
//
//console.log(arrayword);
//
//let reverseword = arrayword.toString();
//
//reverseword = reverseword.replace(/,/g, '');
//
//console.log(reverseword);

// EXERCICIO 3 - Considere o array de strings abaixo e escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = 0;
let biggerword;
let smallestword;

for (index = 0; index < array.length; index += 1) {
  if (array[index].length > bigger) {
    bigger = array[index].length;
    biggerword = array[index];
  }
}
let smallest = bigger;
for (index = 0; index < array.length; index += 1) {
  if (array[index].length < smallest) {
    smallest = array[index].length;
    smallestword = array[index];
  }
}
console.log("maior palavra é: " + biggerword);
console.log("menor palavra é: " + smallestword);