// COR DO FUNDO
updateBodyColor();

function updateBodyColor() {
  let body = document.getElementById('corpo');
  let bodyColorStorage = localStorage.getItem("bodyColor");
  if (bodyColorStorage === "black") {
    body.style.backgroundColor = "black";
  } 
  else if (bodyColorStorage === "darkgreen") {
    body.style.backgroundColor = "darkgreen";
  } 
  else if (bodyColorStorage === "orange") {
    body.style.backgroundColor = "orange";
  } 
  else {
    body.style.backgroundColor = "black";
    localStorage.setItem('bodyColor', "black");
  }
}

const bodyPaintButton = document.getElementById('backColor');
bodyPaintButton.addEventListener('click', function() {
  let body = document.getElementById('corpo');
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = 'darkgreen';
    localStorage.setItem('bodyColor', 'darkgreen');
  }
  else if (body.style.backgroundColor === "darkgreen") {
    body.style.backgroundColor = 'orange';
    localStorage.setItem('bodyColor', 'orange');
  }
  else if (body.style.backgroundColor === "orange") {
    body.style.backgroundColor = 'black';
    localStorage.setItem('bodyColor', 'black');
  }
  
})

// COR DAS LETRAS

updateFontColor();

function updateFontColor() {
  let texto = document.querySelectorAll('.texto');
  let fontColorStorage = localStorage.getItem("fontColor");
  if (fontColorStorage === "black") {
    texto[0].style.color = "black";
    texto[1].style.color = "black";
  } 
  else if (fontColorStorage === "white") {
    texto[0].style.color = "white";
    texto[1].style.color = "white";
  } 
  else {
    texto.style.color = "white";
    localStorage.setItem('fontColor', "white");    
  }
}

let blackWhiteButton = document.querySelector('#BWBut');
blackWhiteButton.addEventListener('click', function(evento) {
  if (evento.target.id === "textWhite") {
    let colorirTexto = document.querySelectorAll('.texto');
    colorirTexto[0].style.color = "white";
    colorirTexto[1].style.color = "white";
    localStorage.setItem('fontColor', "white");
  }
  else if (evento.target.id === "textBlack") {
    let colorirTexto = document.querySelectorAll('.texto');
    colorirTexto[0].style.color = "black";
    colorirTexto[1].style.color = "black";
    localStorage.setItem('fontColor', "black");
  }
})