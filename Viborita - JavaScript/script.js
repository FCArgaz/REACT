const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

let gameOver = false;
let foodX, foodY;
let snakeX = 5,
  snakeY = 10;
let snakeBooty = [];
let velocityY = 0,
  velocityX = 0;
let setIntervalId;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerHTML = `High Score: ${highScore}`;


const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
  console.log(foodX);
};

const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("¡Game Over!");
  location.reload();
};

const changeDirection = (e) => {
  /*     console.log(e) */ if (e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
  initGame();
};

const initGame = () => {
  if (gameOver) return handleGameOver();
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
    snakeBooty.push([foodX, foodY]);
    score++;

    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);
    scoreElement.innerHTML = `Score: ${score}`

    highScoreElement.innerHTML = `High Score: ${highScore}`;

  }

  for (let i = snakeBooty.length - 1; i > 0; i--) {
    snakeBooty[i] = snakeBooty[i - 1];
  }

  snakeBooty[0] = [snakeX, snakeY];

  snakeX += velocityX;
  snakeY += velocityY;

  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    /* console.log("¡Game Over!"); */
    gameOver = true;
  }

  for (let i = 0; i < snakeBooty.length; i++) {
    htmlMarkup += `<div class="snake-head" style="grid-area: ${snakeBooty[i][1]} / ${snakeBooty[i][0]}"></div>`;
    if (i !== 0 && snakeBooty[0][1] === snakeBooty[i][1] && snakeBooty[0][0] === snakeBooty[i][0]) {
        gameOver = true;
    }
  }

  playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
/* initGame(); */
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
