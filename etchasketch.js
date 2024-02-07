const gridDiv = document.querySelector('#grid');
let square = document.createElement('div');
const resButton = document.querySelector('#resolution');
let sideLength;
let resNumber;

function reRes() {
  resButton.addEventListener('click', () => {
   sideLength= Number(prompt('Enter a Number for squares per side', ''));
  });

// Wieso geht das nicht // 
  resNumber = sideLength;

  for (let i = 1; i <= resNumber; i++) {
      square = document.createElement('div');
      square.setAttribute('class', 'square');
      gridDiv.appendChild(square);
      square.textContent = '';
      // Loop funktioniert ohne Funktion //
  }
}
reRes();



let allSquares = document.querySelectorAll('.square');

// drawColor WICHTIG. Definiert MAUSEVENTS und ZEICHNEN //

let drawColor = false;

allSquares.forEach(square => {
  square.addEventListener('mousedown', () => {
    square.style.backgroundColor = 'rgb(12, 15, 111)';
    drawColor = true;
  });

  square.addEventListener('mouseup', () => {
    drawColor = false;
  });

  square.addEventListener('mouseover', () => {
    if(drawColor){
      square.style.backgroundColor = 'rgb(12, 15, 111)'
    }
  });
});





