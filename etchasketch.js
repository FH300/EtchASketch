const gridDiv = document.querySelector('#grid');
let square = document.createElement('div');
const resButton = document.querySelector('#resolution');
const colorButton = document.querySelector('#color');
const randomizeButton = document.querySelector('#checkbox');
let squareArr = []
let sideLength;
let secSideLength;

function squareGrid(sideLength, secSideLength) {

  if(squareArr.length > 0) {
    for(let i = 0; i <= squareArr.length - 1; i++) {
      squareArr[i].remove();
    }
  }

  for(let i = 0; i <= sideLength * secSideLength - 1; i++) {
    square = document.createElement('div');
    square.setAttribute('class', 'square');
    gridDiv.appendChild(square);
    square.textContent = '';
    // + "px" WICHTIG !!
    square.style.height = 480 / sideLength + "px";
    square.style.width = 480 / sideLength + "px";
    squareArr.push(square);
  }

  let allSquares = document.querySelectorAll('.square');

  function randomRgb() {
    return Math.floor(Math.random() * 256);
  }

  let drawColor = false;

  allSquares.forEach(square => {

    square.addEventListener('mousedown', () => {
      if(randomizeButton.checked) {
        square.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
        drawColor = true;
      } else {
        square.style.backgroundColor = colorButton.value;
        drawColor = true;
      }
    });

    square.addEventListener('mouseup', () => {
      drawColor = false;
    });

    square.addEventListener('mouseover', () => {
      if(drawColor){
        if(randomizeButton.checked) {
          square.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
          drawColor = true;
        } else {
          square.style.backgroundColor = colorButton.value;
          drawColor = true;
        }
      }
    });
  });
}

resButton.addEventListener('click', () => {

  sideLength = Number(prompt('Enter a number for squares per side', ''));
  secSideLength = sideLength;

  if (sideLength >= 100) {
    alert("This number is too large")
  } else {
    squareGrid(sideLength, secSideLength);
  }
});







