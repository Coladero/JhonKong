//Aqui se desarolla lo que ocurre en el canvas.
class Game {
  constructor() {
    //todas nuestras propiedades del juego
    this.bg = new Image(); //background del canvas
    this.bg.src = "./img/bg.jpg";
    this.mario = new Mario();
    this.luigi = new Luigi();
    this.goomba = new Goomba();
    this.platform = new Platform();
    this.floor = new Floor();
    this.platTop = new PlatTop();
    this.floorBoss = new FloorBoss();
    this.isGameOn = true;
  }
  //BackGround del canvas.
  drawBackGround = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };
  //Limpiar el canvas.
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  checkmarioLuigiCollision = () => {
    if (
      this.mario.mariox < this.luigi.x + this.luigi.w &&
      this.mario.mariox + this.mario.mariow > this.luigi.x &&
      this.mario.marioy < this.luigi.y + this.luigi.h &&
      this.mario.marioh + this.mario.marioy > this.luigi.y
    ) {
      this.isGameOn = false;

      //2 ocultar canvas
      canvas.style.display = "none";
      //3 gameover screen
      youWinScreen.style.display = "flex";
    }
  };
  checkmarioGoombaCollision = () => {
    if (
      this.mario.mariox === this.goomba.x &&
      this.mario.marioy === this.goomba.y
    ) {
      this.isGameOn = false;
      //2 ocultar canvas
      canvas.style.display = "none";
      //3 gameover screen
      gameOverScreen.style.display = "flex";
    }
  };

  gameLoop = () => {
    //1. limpiar el canvas.
    this.clearCanvas();
    //2. mover los elementos u otras acciones.
    this.goomba.goombaMove();
    this.checkmarioLuigiCollision();
    this.checkmarioGoombaCollision();

    //3. dibujar los elementos.
    this.drawBackGround();
    this.mario.drawMario();
    this.luigi.drawLuigi();
    this.goomba.drawGoomba();
    this.platform.drawPlatform();
    this.floor.drawFloor();
    this.platTop.drawPlatTop();
    this.floorBoss.drawFloorBoss();

    //4. la recursion para la animacion.
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop); //llamar a la funcion dentro de ella misma.
    }
  };
}
