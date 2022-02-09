//Aqui se desarolla lo que ocurre en el canvas.
class Game {
  constructor() {
    //todas nuestras propiedades del juego
    this.bg = new Image(); //background del canvas
    this.bg.src = "./img/bg.jpg";
    this.mario = new Mario();
    this.luigi = new Luigi();
    this.goomba = new Goomba();
    this.flower = [new Flower(0,"./img/flower.png")];
    this.platform = new Platform();
    this.floor = new Floor();
    this.platTop = new PlatTop();
    this.floorBoss = new FloorBoss();
    this.goombaArr = [new Goomba(20,"./img/goomba.png",)];
    this.goombaSepar = 500;
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
      //2 ocultar canvas
      canvas.style.display = "none";
      //3 gameover screen
      youWinScreen.style.display = "flex";
      youWinSound();
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
        this.mario.marioy = this.floor.y - this.mario.marioh
      }
    }
  }
  checkMarioPlatformCollision = () =>{
    console.log(this.mario.mariox < this.platform.x + this.platform.w)
    if (
      this.mario.mariox < this.platform.x + this.platform.w &&
      this.mario.mariox + this.mario.mariow > this.platform.x &&
      this.mario.marioy < this.platform.y + this.platform.h &&
      this.mario.marioh + this.mario.marioy > this.platform.y
    ) {
      if(this.mario.marioy < this.platform.y){
        this.mario.marioy = this.platform.y - this.mario.marioh
        // console.log("ole")
      }
    }
  }
  checkMarioPlatTopCollision = () =>{
    if (
      this.mario.mariox < this.platTop.x + this.platTop.w &&
      this.mario.mariox + this.mario.mariow > this.platTop.x &&
      this.mario.marioy < this.platTop.y + this.platTop.h &&
      this.mario.marioh + this.mario.marioy > this.platTop.y
    ) {
      if(this.mario.marioy < this.platTop.y){
        this.mario.marioy = this.platTop.y - this.mario.marioh
      }
    }
  }
  checkMarioFloorBossCollision = () =>{
    if (
      this.mario.mariox < this.floorBoss.x + this.floorBoss.w &&
      this.mario.mariox + this.mario.mariow > this.floorBoss.x &&
      this.mario.marioy < this.floorBoss.y + this.floorBoss.h &&
      this.mario.marioh + this.mario.marioy > this.floorBoss.y
    ) {
      if(this.mario.marioy < this.floorBoss.y){
        this.mario.marioy = this.floorBoss.y - this.mario.marioh
      }
    }
  }
  // Mario and Flower Collision.
  checkMarioFlowerCollision = (eachFlowerParam) =>{
    if (this.mario.mariox < eachFlowerParam.x + eachFlowerParam.w &&
      this.mario.mariox + this.mario.mariow > eachFlowerParam.x &&
      this.mario.marioy < eachFlowerParam.y + eachFlowerParam.h &&
      this.mario.marioh + this.mario.marioy > eachFlowerParam.y) {
        console.log("collision")
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
    this.checkMarioPlatformCollision();
    this.checkMarioPlatTopCollision();
    this.checkMarioFloorBossCollision();
    this.mario.updatePosition();  
    this.goombaArr.forEach((eachGoomba) =>{
      eachGoomba.goombaMove()
  });
  this.spawningGoomba();
  this.goombaArr.forEach((eachGoomba) =>{
      this.checkmarioGoombaCollision(eachGoomba);
  });
  this.flower.forEach((eachFlower) =>{
    this.checkMarioFlowerCollision(eachFlower);
});



    //3. dibujar los elementos.
    //draw Pj's.
    this.drawBackGround();
    this.mario.drawMario();
    this.luigi.drawLuigi();
    this.goombaArr.forEach((eachGoomba) => {
      eachGoomba.drawGoomba()
  })
  this.flower.forEach((eachFlower) => {
    eachFlower.drawFlower()
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
