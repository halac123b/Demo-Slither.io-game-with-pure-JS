class game {
  constructor(){
    // Create canvas - context
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;
    document.body.appendChild(this.canvas);

    this.snake = new snake(this);
    this.screen = new screenGame(this);
    this.background = new background(this);

    this.loop();
  }

  loop(){
    this.update();
    this.draw();

    setTimeout(() => this.loop(), 20);
  }

  update(){
    this.screen.update();
    this.snake.update();
    this.screen.update();
    this.background.update();
  }

  clearScreen(){
    this.context.fillStyle = "#f2f2f2";
    this.context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  }
  draw(){
    this.clearScreen();
    this.background.draw();
    this.snake.draw();
  }
}

var g = new game();