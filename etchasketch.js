const gridDiv = document.querySelector('#grid');
let square = document.createElement('div');


for (let i = 1; i <= 256; i++) {
  square = document.createElement('div');
  square.setAttribute('class', 'square');
  gridDiv.appendChild(square);
  square.textContent = '';
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