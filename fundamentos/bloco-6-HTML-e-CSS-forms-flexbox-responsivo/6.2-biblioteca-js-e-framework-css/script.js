

function submitFunctions(evento) {
  evento.preventDefault();
  const testeDeValidacao = validadorDeTextos();
  if (testeDeValidacao === false) {
    alert('Dados Inválidos')
  }
  else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

window.onload = function () {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', submitFunctions);
  const eraseButton = document.getElementById('eraseButton');
  eraseButton.addEventListener('click', limparDados);
  const concordoImagens = document.getElementById('concordoImagens');
  concordoImagens.addEventListener('change', liberaSubmit);
};

function limparDados() {
  const elementosForm = document.querySelectorAll('input');
  const textArea = document.querySelector('#porque');
  for (let index = 0; index < elementosForm.length; index += 1) {
    const dadosInputados = elementosForm[index];
    dadosInputados.value = '';
    dadosInputados.checked = false;
  }
  textArea.value = '';
}

function liberaSubmit() {
  const submitButton = document.getElementById('submitButton');
  const concordoImagens = document.getElementById('concordoImagens');
  submitButton.disabled = !concordoImagens.checked;
}

function validadorDeTextos() {
  const nome = document.getElementById('nome').value.length;
  const nomeInvalido = nome <10 || nome > 40;
  const email = document.getElementById('email').value.length;
  const emailInvalido = email < 10 || email > 50;
  const porque = document.querySelector('#porque').value.length;
  const porqueInvalido = porque > 500;
  if (nomeInvalido || emailInvalido || porqueInvalido) {
    return false;
  }
  else {
    return true;
  }
}

let dateButton = document.getElementById('data').DatePickerX.init();

