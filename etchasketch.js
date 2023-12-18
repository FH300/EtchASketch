let gridDiv = document.querySelector('#grid');


for (let i = 1; i <= 256; i++) {
  let square = document.createElement('div');
  square.setAttribute('class', 'square');

  gridDiv.appendChild(square);
  square.textContent = '';
}