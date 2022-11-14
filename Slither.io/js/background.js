class background {
  constructor(game){
    this.game = game;
  }

  update(){

  }

  drawLine(startPos, endPos){
    this.game.context.strokeStyle = "#d9d9d9";
    this.game.context.lineWidth = 3;
    this.game.context.beginPath();
    this.game.context.moveTo(startPos.x, startPos.y);
    this.game.context.lineTo(endPos.x, endPos.y);
    this.game.context.stroke();
  }
  draw(){
    // Draw vertical line
    let firstLineX = GRID_SIZE - (this.game.snake.x % GRID_SIZE);
    let currentLineX = firstLineX;

    while (currentLineX <= SCREEN_WIDTH){
      this.drawLine(
        {x: currentLineX, y: 0},
        {x: currentLineX, y: SCREEN_HEIGHT}
      );
      currentLineX += GRID_SIZE;
    }
    // Draw horizontal line
    let firstLineY = GRID_SIZE - (this.game.snake.y % GRID_SIZE);
    let currentLineY = firstLineY;

    while (currentLineY <= SCREEN_HEIGHT){
      this.drawLine(
        {x: 0, y: currentLineY},
        {x: SCREEN_WIDTH, y: currentLineY}
      );
      currentLineY += GRID_SIZE;
    }
  }
}