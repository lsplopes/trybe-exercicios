const append = (data) => {
  const listaOrdenada = document.getElementById('coinList');

  const linha = document.createElement('li');
  const div = document.createElement('div');

  div.innerHTML = `${data.name} (${data.symbol}): ${Number(data.priceUsd).toFixed(2)}.`

  linha.appendChild(div);
  listaOrdenada.appendChild(linha);
}

const catchTenFirst = (data) => {
  console.log(data);
  const arrayComDez = data.data.slice(0, 10);
  console.log(arrayComDez);
  return arrayComDez.forEach((coin) => append(coin));
}

const fetchcoin = async () => {
  const url = 'https://api.coincap.io/v2/assets'
  try {
    const response = await fetch(url);
    const data = await response.json();
    catchTenFirst(data);
  } catch(error) {
    console.log(`algo errado não está certo em: ( \n${error}`);
  }
}

fetchcoin()