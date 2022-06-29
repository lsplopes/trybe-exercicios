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
    texto[2].style.color = "black";
  } 
  else if (fontColorStorage === "white") {
    texto[0].style.color = "white";
    texto[1].style.color = "white";
    texto[2].style.color = "white";
  } 
  else {
    texto[0].style.color = "white";
    texto[1].style.color = "white";
    texto[2].style.color = "white";
    localStorage.setItem('fontColor', "white");    
  }
}

let blackWhiteButton = document.querySelector('#BWBut');
blackWhiteButton.addEventListener('click', function(evento) {
  if (evento.target.id === "textWhite") {
    let colorirTexto = document.querySelectorAll('.texto');
    colorirTexto[0].style.color = "white";
    colorirTexto[1].style.color = "white";
    colorirTexto[2].style.color = "white";
    localStorage.setItem('fontColor', "white");
  }
  else if (evento.target.id === "textBlack") {
    let colorirTexto = document.querySelectorAll('.texto');
    colorirTexto[0].style.color = "black";
    colorirTexto[1].style.color = "black";
    colorirTexto[2].style.color = "black";    
    localStorage.setItem('fontColor', "black");
  }
})

// TAMANHO DA FONTE

updateFontSize();

function updateFontSize() {
  let texto = document.querySelectorAll('.texto');
  let fontSizeStorage = localStorage.getItem("fontSize");
  if (fontSizeStorage === "80%") {
    texto[0].style.fontSize = "120%";
    texto[1].style.fontsize = "80%";
    texto[2].style.fontSize = "120%";
  } 
  else if (fontSizeStorage === "100%") {
    texto[0].style.fontSize = "140%";
    texto[1].style.fontSize = "100%";
    texto[2].style.fontSize = "140%";
  } 
  else if (fontSizeStorage === "120%") {
    texto[0].style.fontSize = "160%";
    texto[1].style.fontSize = "120%";
    texto[2].style.fontSize = "160%";
  } 
  else {
    texto[0].style.fontSize = "140%";
    texto[1].style.fontSize = "100%";
    texto[2].style.fontSize = "140%";
    localStorage.setItem('fontSize', "100%");    
  }
}

let sizeButtons = document.querySelector('#sizeButtons');
sizeButtons.addEventListener('click', function(evento) {
  if (evento.target.id === "smallSize") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.fontSize = "120%";
    redimensionarTexto[1].style.fontSize = "80%";
    redimensionarTexto[2].style.fontSize = "120%";
    localStorage.setItem('fontSize', "80%");
  }
  else if (evento.target.id === "mediumSize") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.fontSize = "140%";
    redimensionarTexto[1].style.fontSize = "100%";
    redimensionarTexto[2].style.fontSize = "140%";
    localStorage.setItem('fontSize', "100%");
  }
  else if (evento.target.id === "largeSize") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.fontSize = "160%";
    redimensionarTexto[1].style.fontSize = "120%";
    redimensionarTexto[2].style.fontSize = "160%";
    localStorage.setItem('fontSize', "120%");
  }
});

// ESPAÇAMENTO DAS LINHAS

updateLineHeight();

function updateLineHeight() {
  let texto = document.querySelectorAll('.texto');
  let lineHeigthStorage = localStorage.getItem("lineHeight");
  if (lineHeigthStorage === "101%") {
    texto[0].style.lineHeight = "160%";
    texto[1].style.lineHeight = "101%";
    texto[2].style.lineHeight = "101%";
  } 
  else if (lineHeigthStorage === "130%") {
    texto[0].style.lineHeight = "140%";
    texto[1].style.lineHeight = "130%";
    texto[2].style.lineHeight = "130%";
  } 
  else if (lineHeigthStorage === "160%") {
    texto[0].style.lineHeight = "160%";
    texto[1].style.lineHeight = "160%";
    texto[2].style.lineHeight = "160%";
  } 
  else {
    texto[0].style.lineHeight = "140%";
    texto[1].style.lineHeight = "130%";
    texto[2].style.lineHeight = "130%";
    localStorage.setItem('lineHeight', "130%");    
  }
}

let lineHeightButtons = document.querySelector('#lineHeightButton');
lineHeightButtons.addEventListener('click', function(evento) {
  if (evento.target.id === "lineHeigthSmall") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.lineHeight = "160%";
    redimensionarTexto[1].style.lineHeight = "101%";
    redimensionarTexto[2].style.lineHeight = "101%";
    localStorage.setItem('lineHeight', "101%");
  }
  else if (evento.target.id === "lineHeigthMedium") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.lineHeight = "140%";
    redimensionarTexto[1].style.lineHeight = "130%";
    redimensionarTexto[2].style.lineHeight = "130%";
    localStorage.setItem('lineHeight', "130%");
  }
  else if (evento.target.id === "lineHeigthLarge") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.lineHeight = "160%";
    redimensionarTexto[1].style.lineHeight = "160%";
    redimensionarTexto[2].style.lineHeight = "160%";
    localStorage.setItem('lineHeight', "160%");
  }
});

// TIPO DE FONTE

updateFontFamily();

function updateFontFamily() {
  let textFont = document.querySelectorAll('.texto');
  let textFontStorage = localStorage.getItem("textFamilyFont");
  if (textFontStorage === "Arial") {
    textFont[0].style.fontFamily = "Arial";
    textFont[1].style.fontFamily = "Arial";
    textFont[2].style.fontFamily = "Arial";
  } 
  else if (textFontStorage === "Monospace") {
    textFont[0].style.fontFamily = "Monospace";
    textFont[1].style.fontFamily = "Monospace";
    textFont[2].style.fontFamily = "Monospace";
  } 
  else if (textFontStorage === "Verdana") {
    textFont[0].style.fontFamily = "Verdana";
    textFont[1].style.fontFamily = "Verdana";
    textFont[2].style.fontFamily = "Verdana";    
  } 
  else {
    textFont[0].style.fontFamily = "Arial";
    textFont[1].style.fontFamily = "Arial";
    textFont[2].style.fontFamily = "Arial";
    localStorage.setItem('textFamilyFont', "Arial");
  }
}




let fontFamilyButton = document.getElementById('fontFamaly');

fontFamilyButton.addEventListener('click', function() {
  let currentFont = document.querySelectorAll('.texto');
  if (currentFont[1].style.fontFamily === "Arial") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.fontFamily = "Monospace";
    redimensionarTexto[1].style.fontFamily = "Monospace";
    redimensionarTexto[2].style.fontFamily = "Monospace";
    localStorage.setItem('textFamilyFont', "Monospace");
    console.log('arial mono')
  }
  else if (currentFont[1].style.fontFamily === "monospace") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.fontFamily = "Verdana";
    redimensionarTexto[1].style.fontFamily = "Verdana";
    redimensionarTexto[2].style.fontFamily = "Verdana";
    localStorage.setItem('textFamilyFont', "Verdana");
    console.log('mono verda')
  }
  else if (currentFont[1].style.fontFamily === "Verdana") {
    let redimensionarTexto = document.querySelectorAll('.texto');
    redimensionarTexto[0].style.fontFamily = "Arial";
    redimensionarTexto[1].style.fontFamily = "Arial";
    redimensionarTexto[2].style.fontFamily = "Arial";
    localStorage.setItem('textFamilyFont', "Arial");
    console.log('verda ari')
  }
  else {
    console.log('UAI')}
})