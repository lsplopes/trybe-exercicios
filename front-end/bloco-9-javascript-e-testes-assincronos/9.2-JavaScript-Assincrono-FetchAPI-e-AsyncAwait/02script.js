let brl = 0;

const append = (data) => {
  const listaOrdenada = document.getElementById('coinList');

  const linha = document.createElement('li');
  const div = document.createElement('div');

  div.innerHTML = `${data.name} (${data.symbol}): ${(Number(data.priceUsd)*brl).toFixed(2)}.`

  linha.appendChild(div);
  listaOrdenada.appendChild(linha);
}

const catchTenFirst = (data) => {
  const arrayComDez = data.data.slice(0, 10);
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

const fetchConvert = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
  try {
    const response = await fetch(url);
    const data = await response.json();
    brl = data.usd.brl;
  } catch(error) {
    console.log(`algo errado não está certo com a conversão em ( \n${error}`);
  }
}
fetchConvert();
fetchcoin();
