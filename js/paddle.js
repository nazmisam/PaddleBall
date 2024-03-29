var paddle1Y = 100, paddle2Y = 100
const PADDLE_DIST_FROM_EDGE = 25;
const PADDLE_HEIGHT = 250;
const PADDLE_WIDTH = 25;
const PADDLE_THICKNESS = BALL_SPEED_MAX + 2;

const PADDLE_COMPUTER_MOVE_SPEED = 9.0;

// const PADDLE_TWO_PLAYER_KEYBOARD_MOVE_SPEED = 18.0;


function paddlesDraw(ctx) {
  ctx.fillRect(PADDLE_DIST_FROM_EDGE, PADDLE_HEIGHT, PADDLE_WIDTH, paddle1Y);

  ctx.fillRect(canvas.width - PADDLE_WIDTH - PADDLE_DIST_FROM_EDGE, PADDLE_HEIGHT, PADDLE_WIDTH, paddle2Y);

}

function moveComputerPaddle() {
  var paddle2Center = paddle2Y + (PADDLE_HEIGHT / 2);
  const AI_SIT_STILL_MARGIN = 35;
  var topChaseLine = paddle2Center - AI_SIT_STILL_MARGIN;
  var bottomChaseLine = paddle2Center + AI_SIT_STILL_MARGIN;

  if (ballY < topChaseLine) {
    paddle2Y -= PADDLE_COMPUTER_MOVE_SPEED;
  }
  else if (ballY > bottomChaseLine) {
    paddle2Y += PADDLE_COMPUTER_MOVE_SPEED;
  }
}