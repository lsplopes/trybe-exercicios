const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const getBigger = (string) => string.toUpperCase();
const getFirst = (string) => string.substr(0, 1);
const concatStrings = (string1, string2) => string1 + string2;

const fetchDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { 
  retornaNumeroAleatorio,
  getBigger,
  getFirst,
  concatStrings,
  fetchDog
 };