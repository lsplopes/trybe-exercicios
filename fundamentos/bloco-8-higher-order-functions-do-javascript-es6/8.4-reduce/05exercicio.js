//5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((palAcc, palCurr) => {
    // console.log(`palAcc: ${palAcc} --- palCurr: ${palCurr.toLowerCase().split('').filter((letra) => letra === 'a').join('').length}`);
    return palAcc + (palCurr.toLowerCase().split('').filter((letra) => letra === 'a').join('').length);
   
  }, 0 );
}

console.log(containsA()); 