var canvas, canvasContext;

window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    paddlesDraw(ctx, canvas)
    ballDraw(ctx);
    ballMove();

  }

}

