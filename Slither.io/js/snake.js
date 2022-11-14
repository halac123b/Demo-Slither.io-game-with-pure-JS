class snake {
  constructor(game){
    this.game = game;
    // Tọa độ snake nằm giữa màn hình
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;
    // Vị trí các đốt của snake trong quá trình di chuyển
    this.tailPositions = [];
    this.eye = new eye(this);

    this.createTail();
    this.listenMouseEvent();

    // Góc di chuyển của snake theo hướng mouse
    this.angle = 0;
  }

  listenMouseEvent(){
    this.game.canvas.addEventListener("mousemove", (event) => {
      var rect = this.game.canvas.getBoundingClientRect();
      this.processMouseMove({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    });
  }

  processMouseMove(mousePos){
    this.angle = Math.atan2(
      mousePos.y - SCREEN_HEIGHT / 2,
      mousePos.x - SCREEN_WIDTH / 2
    );
  }

  createTail(){
    for (let i = 0; i < 200; i++){
      this.tailPositions.push({
        x: this.x - i * SNAKE_SPEED,
        y: this.y
      });
    }
  }
  update(){
    let newTailPosition = {
      x: this.x + Math.cos(this.angle) * SNAKE_SPEED,
      y: this.y + Math.sin(this.angle) * SNAKE_SPEED
    }
    this.tailPositions.unshift(newTailPosition);
    this.tailPositions.pop();

    this.x = newTailPosition.x;
    this.y = newTailPosition.y;
  }
    
  draw(){
    // Draw shadow
    for(let i = this.tailPositions.length - 1; i > 1; i--){
      if (i % 6 == 0){
        this.game.screen.drawCircle(
          { x: this.tailPositions[i].x, 
            y: this.tailPositions[i].y },
          "shadow"
        );
      }
    }
    // Draw body
    for(let i = this.tailPositions.length - 1; i > 1; i--){
      if (i % 6 == 0){
        this.game.screen.drawCircle(
          { x: this.tailPositions[i].x, 
            y: this.tailPositions[i].y },
          "snake"
        );
      }
    }
    // Draw head
    this.game.screen.drawCircle(
      { x: this.x, y: this.y },
      "snake");
    
    this.eye.draw();
  }
}