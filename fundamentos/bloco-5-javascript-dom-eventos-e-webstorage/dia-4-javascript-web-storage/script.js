
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

