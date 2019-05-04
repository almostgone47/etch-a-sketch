const container = document.querySelector('.container');
const reset = document.querySelector('#reset');
const start = document.querySelector('#start');

const makeGrid = (input) => {
  let num = parseInt(input) * parseInt(input)
  container.style.gridTemplateColumns = "repeat(" + parseInt(input) + ", 20px)";
  container.style.gridTemplateRows = "repeat(" + parseInt(input) + ", 20px)";
  container.style.width = parseInt(input) * 20 + "px"
  container.style.height = parseInt(input) * 20 + "px"
  for (let i = 0; i < num; i++) {
    const square = document.createElement("div")
    square.className = "square"
    container.appendChild(square)
  }
}

container.addEventListener('mouseover', event => {
  const target = event.target
  if(target.className == 'square') {
    target.className = 'hovered';
  }
})

reset.addEventListener('click', () => {
  const squares = document.querySelectorAll('.hovered');
  squares.forEach((val, num) => {
    squares[num].className = "square"
  })
})

start.addEventListener('click', () => {
  let input = window.prompt("Enter width of board!", 16);
  makeGrid(input)
})