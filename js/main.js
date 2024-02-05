var canvas, canvasContext;
var paddle1Score = 0, paddle2Score = 0;
const WINNING_SCORE = 3;


window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    startGame(ctx);
  }
}

function startGame(ctx) {
  // these next few lines set up our game logic and render to happen 30 times per second
  var framesPerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything(ctx);
  }, 1000 / framesPerSecond);

  ballReset();
}

function drawEverything(ctx) {


  fillRect(ctx, 0, 0, canvas.width, canvas.height, 'white')
  ballDraw(ctx);
  paddlesDraw(ctx, canvas)
}

function moveEverything() {
  ballMove();
}

