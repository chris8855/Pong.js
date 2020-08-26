const INITIAL_BALL_SPEED = 3;
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;

const BALL_SPEED = 3;
const BALL_RADIUS = 30;

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

  //initialize ball
  ballVelocityX = random(-1, 1);
  ballVelocityX = ballVelocityX * INITIAL_BALL_SPEED;

  ballVelocityY = random(-1, 1);
  ballVelocityX = ballVelocityY * INITIAL_BALL_SPEED;

  ball = createVector(width / 2, height / 2);
}

function draw() {
  handleBall();
  background(66, 78, 245);
  fill(204, 39, 31);

  //Player 1
  rect(PADDLE_WIDTH * 2, player1Position, PADDLE_WIDTH, PADDLE_HEIGHT);

  //Player 2
  rect(width - PADDLE_WIDTH * 3, player2Position, PADDLE_WIDTH, PADDLE_HEIGHT);

  //draw ball
  ellipse(ball.x, ball.y, BALL_RADIUS);

  controls();
}

function reset() {
  ball.x = width / 2;
  ball.y = height / 2;
}

function handleBall() {
  ball.x += ballVelocityX;
  ball.y += ballVelocityY;

  /* top & bottom collisions */
  if (ball.y > height || ball.y < 0) ballVelocityY *= -1; // reverse y-velocity
  /* paddle collisions */
  if (ball.x <= PADDLE_WIDTH * 3) {
    // within range on the left side

    if (ball.x <= PADDLE_WIDTH) {
      // out of bounds

      player2Score++;
      reset();
      return;
    }

    // check collision on left paddle
    if (ball.y > player1Position && ball.y < player1Position + PADDLE_HEIGHT) {
      if (ballVelocityX < 0) {
        // prevent the ball from getting stuck inside paddle

        ballVelocityX *= -1;
        ballVelocityX = ballVelocityX * random(1, 1.3);
      }
    }
  } else if (ball.x >= width - PADDLE_WIDTH * 3) {
    // right paddle

    if (ball.x >= width - PADDLE_WIDTH) {
      // out of bounds

      player1Score++;
      reset();
      return;
    }

    // check collision on right paddle
    if (ball.y > player2Position && ball.y < player2Position + PADDLE_HEIGHT) {
      if (ballVelocityX > 0) {
        // prevent the ball from getting stuck inside paddle

        ballVelocityX *= -1;
        ballVelocityX = ballVelocityX * random(1, 1.3);
      }
    }
  }
}

function controls() {
  if (keyIsDown(DOWN_ARROW)) {
    player2Position += 10;
  }
  if (keyIsDown(UP_ARROW)) {
    player2Position -= 10;
  }
  if (keyIsDown(87)) {
    player1Position -= 10;
  }
  if (keyIsDown(83)) {
    player1Position += 10;
  }
}
