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
    this.goombaArr = [new Goomba(20,"./img/goomba.png",)];
    this.goombaSepar = 500;
    this.flower = new Flower();
    this.isGameOn = true;
  }

  //Functions!!!
   

  spawningGoomba = () =>{
    let lastGoomba = this.goombaArr[this.goombaArr.length - 1];
    
    if (lastGoomba.y > (canvas.height - this.goombaSepar )){
        let randomX = Math.random() * - 100;
      let newGoomba = new Goomba(randomX,"./img/goomba.png");
      this.goombaArr.push(newGoomba);
    }
  }
  //BackGround del canvas.
  drawBackGround = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };
  //Limpiar el canvas.
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //! Collisions functions.
  //Mario and Luigi collision for win.
  checkmarioLuigiCollision = () => {
    if (
      this.mario.mariox < this.luigi.x + this.luigi.w &&
      this.mario.mariox + this.mario.mariow > this.luigi.x &&
      this.mario.marioy < this.luigi.y + this.luigi.h &&
      this.mario.marioh + this.mario.marioy > this.luigi.y
    ) {
      this.isGameOn = false;
      youWinSound();
      //2 ocultar canvas
      canvas.style.display = "none";
      //3 gameover screen
      youWinScreen.style.display = "flex";
    }
  };
  //Mario and GoombaArr collision lose.
  checkmarioGoombaCollision = (eachGoombaParam) => {
    if (this.mario.mariox < eachGoombaParam.x + eachGoombaParam.w &&
      this.mario.mariox + this.mario.mariow > eachGoombaParam.x &&
      this.mario.marioy < eachGoombaParam.y + eachGoombaParam.h &&
      this.mario.marioh + this.mario.marioy > eachGoombaParam.y) {
      this.isGameOn = false;
      youLose.play()
      //2 ocultar canvas
      canvas.style.display = "none";
      //3 gameover screen
      gameOverScreen.style.display = "flex";

      
      
    }
  };
  //Mario and platform collision.
  checkMarioFloorCollision = () =>{
    if (
      this.mario.mariox < this.floor.x + this.floor.w &&
      this.mario.mariox + this.mario.mariow > this.floor.x &&
      this.mario.marioy < this.floor.y + this.floor.h &&
      this.mario.marioh + this.mario.marioy > this.floor.y
    ) {
      if(this.mario.marioy < this.floor.y){
        this.mario.marioy = this.floor.y + this.mario.marioh
      }
    }
  }
  //Mario and Flower Collision.
  checkMarioFlowerCollision = () =>{
    if (this.mario.mariox < this.flower.x + this.flower.w &&
      this.mario.mariox + this.mario.mariow > this.flower.x &&
      this.mario.marioy < this.flower.y + this.flower.h &&
      this.mario.marioh + this.mario.marioy > this.flower.y) {
        this.flower.splice(0,1);
    }
    
  }

  gameLoop = () => {
    //1. limpiar el canvas.
    this.clearCanvas();
    //2. mover los elementos u otras acciones.
    this.goomba.goombaMove();
    this.checkmarioLuigiCollision();
    this.checkMarioFloorCollision();
    this.checkMarioFlowerCollision();
    this.mario.updatePosition();  
    this.mario.checkLimits()
    this.mario.jump();
    this.goombaArr.forEach((eachGoomba) =>{
      eachGoomba.goombaMove()
  });
  this.spawningGoomba();
  this.goombaArr.forEach((eachGoomba) =>{
      this.checkmarioGoombaCollision(eachGoomba);
  });


    //3. dibujar los elementos.
    //draw Pj's.
    this.drawBackGround();
    this.mario.drawMario();
    this.flower.drawFlower()
    this.luigi.drawLuigi();
    this.goombaArr.forEach((eachGoomba) => {
      eachGoomba.drawGoomba()
  })
    //draw platforms.
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
