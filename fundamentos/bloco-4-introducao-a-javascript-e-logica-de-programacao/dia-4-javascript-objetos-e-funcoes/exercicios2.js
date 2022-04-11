// EXERCICIO 1

function verificapalindrome(palavra) {
  let arrayDaPalavra = palavra.split('');
  let palavraReverse = arrayDaPalavra.reverse();
  let palindromePalavra = palavraReverse.join('');
  if (palindromePalavra === palavra) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

verificapalindrome('lucas');
verificapalindrome('arara');

