class screenGame {
  constructor(game){
    this.game = game;
    // Tọa độ của screen trong cả game world
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
  }

  update(){
    this.top = this.game.snake.y - SCREEN_HEIGHT / 2;
    this.bottom = this.game.snake.y + SCREEN_HEIGHT / 2;
    this.left = this.game.snake.x - SCREEN_WIDTH / 2;
    this.right = this.game.snake.x + SCREEN_WIDTH / 2;
  }

  drawCircle(pos, styleName){
    let styles = [];
    styles["snake"] = {
      color: "#f65a5a",
      borderColor: "red",
      width: 20
    };

    styles["shadow"] = {
      color: "rgba(0,0,0,0.1)",
      borderColor: "rgba(0,0,0,0.1)",
      width: 28
    };

    styles["eye"] = {
      borderColor: "red",
      color: "white",
      width: 10
    };

    let styleProperty = styles[styleName];

    this.game.context.beginPath();
    this.game.context.arc(
      pos.x - this.left,
      pos.y - this.top,
      styleProperty.width, 0,
      Math.PI * 2
    );
    this.game.context.fillStyle = styleProperty.color;
    this.game.context.fill();
    this.game.context.strokeStyle = styleProperty.borderColor;
    this.game.context.stroke();
  }
}