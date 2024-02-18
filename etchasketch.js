const gridDiv = document.querySelector('#grid');
let square = document.createElement('div');
const resButton = document.querySelector('#resolution');
let sideLength = 16;
let secSideLengt;


function squareGrid(sideLength, secSideLength) {
  for (let i = 1; i <= sideLength * secSideLength; i++) {
    square = document.createElement('div');
    square.setAttribute('class', 'square');
    gridDiv.appendChild(square);
    square.textContent = '';
    
    // Loop funktioniert ohne Funktion //
  }

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
}
squareGrid(sideLength, secSideLengt);

resButton.addEventListener('click', () => {
  sideLength = Number(prompt('Enter a number for squares per side', ''));
  secSideLengt = sideLength;
  squareGrid(sideLength, secSideLengt);
});






