const gridDiv = document.querySelector('#grid');
let square = document.createElement('div');


for (let i = 1; i <= 256; i++) {
  square = document.createElement('div');
  square.setAttribute('class', 'square');
  gridDiv.appendChild(square);
  square.textContent = '';
}

document.querySelectorAll('.square').forEach(square => 
  square.addEventListener('mousedown', () => {
    document.querySelectorAll('.square').forEach(square => 
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'rgb(12, 15, 111)';
    }));
}));





