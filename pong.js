//PADDLE_WIDTH * 2, player1Position, PADDLE_WIDTH, PADDLE_HIEGHT
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;

let player1Position, player2Position;
let player1Velocity, player2Velocity;
let player1Score, player2Score;

let ball;
let ballVelocityX;
let ballVelocityY;

function setup() {
  createCanvas(400, 400);
  //initialize
  player1Position = player2Position = height / 2;
}

function draw() {
  console.log(player1Position);

  background(66, 78, 245);
  fill(204, 39, 31);

  //Player 1
  rect(PADDLE_WIDTH * 2, player1Position, PADDLE_WIDTH, PADDLE_HEIGHT);

  //Player 2
  rect(width - PADDLE_WIDTH * 3, player2Position, PADDLE_WIDTH, PADDLE_HEIGHT);

  controls();
}
function controls() {
  if (keyIsDown(DOWN_ARROW)) {
    player1Position += 10;
  }
  if (keyIsDown(UP_ARROW)) {
    player1Position -= 10;
  }
  if (keyIsDown(87)) {
    player2Position = player2Position - 10;
  }
  if (keyIsDown(83)) {
    player2Position = player2Position + 10;
  }
}
