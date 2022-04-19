function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
const days = document.querySelector('#days');

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index in dezDaysList) {
  const addDay = document.createElement('li');
  addDay.innerText = dezDaysList[index];
  addDay.className += 'day';
  days.appendChild(addDay);
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31 ) {
    addDay.className += ' holiday';
  }
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    addDay.className += ' friday';
  }
}

//EXERCICIO 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
const buttonsContainer = document.querySelector('.buttons-container');
function createHolydaysButton () {
  const holidayButton = document.createElement('button');
  holidayButton.id = 'btn-holiday';
  holidayButton.innerText = 'Feriados';
  buttonsContainer.appendChild(holidayButton);
}
createHolydaysButton();

//EXERCICIO 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .



function renderizaholidays() {
  let holidaysDays = document.querySelectorAll('.holiday');
  let holidayPaintButton = document.querySelector('#btn-holiday');
  let backColor = 'rgb(238,238,238)';
  let colorStep = 'yellow';

  holidayPaintButton.addEventListener('click', function() {
    for (let index = 0; index < holidaysDays.length; index += 1) {
      if (holidaysDays[index].style.backgroundColor === colorStep) {
        holidaysDays[index].style.backgroundColor = backColor;
      }
      else {
        holidaysDays[index].style.backgroundColor = colorStep;
      }
    }
  })
}
renderizaholidays();

// EXERCICIO 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . 

function createFridayButton () {
  const fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = 'Sexta-Feira';
  buttonsContainer.appendChild(fridayButton);
}
createFridayButton();

// EXERCICIO 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function renderizaFriday() {
  let diasFriday = [4, 11, 18, 25];
  let fridayDays = document.querySelectorAll('.friday');
  let fridayTextButton = document.querySelector('#btn-friday');
  fridayTextButton.addEventListener('click', function() {
    for (let index = 0; index < fridayDays.length; index += 1) {
      if (fridayDays[index].innerText !== 'Sextou!') {
        fridayDays[index].innerText = 'Sextou!';
      }
      else {
        fridayDays[index].innerText = diasFriday[index];
      }
    }
  })
}
renderizaFriday();

// EXERCICIO 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.



function zoomDays() {
  let diasButton = document.querySelector("#days");
  
  diasButton.addEventListener('mouseover', function(evento) {
    evento.target.style.fontSize = "30px";
  } )
}
zoomDays();

function zoomOutDays() {
  let diasButton = document.querySelector("#days");
  
  diasButton.addEventListener('mouseout', function(evento) {
    evento.target.style.fontSize = "20px";
  } )
}
zoomOutDays();

//EXERCICIO 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function insertTask(newTask) {
let myTasks = document.querySelector('.my-tasks');
let addTask = document.createElement('span');
addTask.className = "my-tasks";
addTask.innerHTML = newTask;
myTasks.appendChild(addTask);
}
insertTask('exercicios dia 5.3');



//EXERCICIO BONUS - Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//Dica - Propriedade: key .
let taskImputplace = document.querySelector('#task-input');
let taskImputButton = document.querySelector('#btn-add');

taskImputButton.addEventListener('click', criaTask);

function criaTask() {
  let myTasks = document.querySelector('.my-tasks');
  let addTask = document.createElement('span');
  addTask.className = "my-tasks";
  addTask.innerHTML = taskImputplace.value;
  myTasks.appendChild(addTask);
}

