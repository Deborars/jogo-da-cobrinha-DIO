let canvas = document.querySelector("#canvas");
let contexto = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
};

let direction = "right";

function criaBG(){
  contexto.fillStyle = "lightgreen";
  contexto.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
  for(let i = 0; i < snake.length; i++){
    contexto.fillStyle = "green";
    contexto.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function iniciarJogo(){
  criaBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(direction == 'right') snakeX += box;
  if(direction == 'left') snakeX -= box;
  if(direction == 'up') snakeY -= box;
  if(direction == 'down') snakeY += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);

