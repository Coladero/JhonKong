//Aqui se desarolla lo que ocurre en el canvas.
class Game {
  constructor() {
    //todas nuestras propiedades del juego
    this.bg = new Image(); //background del canvas
    this.bg.src = "./img/bg.jpg";
    this.mario = new Mario();
    this.luigi = new Luigi();
    this.goomba = new Goomba();
    this.flower = [new Flower(0, "./img/flower.png")];
    this.firstPlat = new FirstPlat();
    this.secondPlat = new SecondPlat();
    this.thirdPlat = new ThirdPlat();
    this.fourthPlat = new FourthPlat();
    this.goombaArr = [new Goomba(20, "./img/goomba.png")];
    this.goombaSepar = 500;
    this.isGameOn = true;
  }

  //! Functions!!!

  spawningGoomba = () => {
    let lastGoomba = this.goombaArr[this.goombaArr.length - 1];

    if (lastGoomba.y > canvas.height - this.goombaSepar) {
      let randomX = Math.random() * -100;
      let newGoomba = new Goomba(randomX, "./img/goomba.png");
      this.goombaArr.push(newGoomba);
    }
  };
  //BackGround del canvas.
  drawBackGround = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };
  //Limpiar el canvas.
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  jump() {
    let marioIsFloor = this.mario.marioy === 500 && this.mario.mariox < 650;
    let marioIsFirstPlatform =
      this.mario.marioy === 391 &&
      this.mario.mariox < 650 &&
      this.mario.mariox > 150;
    let marioIsSecondPlatform =
      this.mario.marioy === 271 &&
      this.mario.mariox < 650 &&
      this.mario.mariox > 150;
    let marioIsThirdPlatform =
      this.mario.marioy === 141 &&
      this.mario.mariox < 650 &&
      this.mario.mariox > 150;

    let marioOnEdge = this.mario.marioy === 500 && this.mario.mariox >= 650;
    let marioEdge2 = this.mario.marioy === 391 && this.mario.mariox <= 150;
    let marioEdge3 = this.mario.marioy === 271 && this.mario.mariox >= 650;
    let marioEdge4 = this.mario.marioy === 141 && this.mario.mariox <= 150;

    if (
      marioIsFloor ||
      marioIsFirstPlatform ||
      marioIsSecondPlatform ||
      marioIsThirdPlatform
    ) {
      this.mario.marioy -= 45;
    } else if (marioOnEdge || marioEdge2 || marioEdge3 || marioEdge4) {
      this.mario.marioy -= 145;
    }
    marioJumpy.play()
  }

  marioMove = (event) => {
    if (event.key === "ArrowRight") {
      this.mario.mariox += this.mario.speedX;
    } else if (event.key === "ArrowLeft") {
      this.mario.mariox -= this.mario.speedX;
    }
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
      youWinAu.play().then(() => {
        return mainTrack.pause();
      });
    }
  };
  //Mario and GoombaArr collision lose.
  checkmarioGoombaCollision = (eachGoombaParam) => {
    if (
      this.mario.mariox < eachGoombaParam.x + eachGoombaParam.w &&
      this.mario.mariox + this.mario.mariow > eachGoombaParam.x &&
      this.mario.marioy < eachGoombaParam.y + eachGoombaParam.h &&
      this.mario.marioh + this.mario.marioy > eachGoombaParam.y
    ) {
      this.isGameOn = false;
      youLose.play().then(() => {
        return mainTrack.pause();
      });

      //2 ocultar canvas
      canvas.style.display = "none";
      //3 gameover screen
      gameOverScreen.style.display = "flex";
    }
  };
  //Mario and platform collision.
  checkMariofirstPlatCollision = () => {
    if (
      this.mario.mariox < this.firstPlat.x + this.firstPlat.w &&
      this.mario.mariox + this.mario.mariow > this.firstPlat.x &&
      this.mario.marioy < this.firstPlat.y + this.firstPlat.h &&
      this.mario.marioh + this.mario.marioy > this.firstPlat.y
    ) {
      if (this.mario.marioy < this.firstPlat.y) {
        this.mario.marioy = this.firstPlat.y - this.mario.marioh;
      }
    }
  };
  //Second floor
  checkMarioSecondPlatCollision = () => {
    if (
      this.mario.mariox >= this.secondPlat.x + this.secondPlat.w &&
      this.mario.mariox + this.mario.mariow <= this.secondPlat.x &&
      this.mario.marioy < this.secondPlat.y + this.secondPlat.h &&
      this.mario.marioh + this.mario.marioy > this.secondPlat.y
    ) {
      if (this.mario.marioy < this.secondPlat.y) {
        this.mario.marioy = this.secondPlat.y - this.mario.marioh;
      }
    }
  };
  //Third floor
  checkMarioThirdPlatCollision = () => {
    if (
      this.mario.mariox < this.thirdPlat.x + this.thirdPlat.w &&
      this.mario.mariox + this.mario.mariow > this.thirdPlat.x &&
      this.mario.marioy < this.thirdPlat.y + this.thirdPlat.h &&
      this.mario.marioh + this.mario.marioy > this.thirdPlat.y
    ) {
      if (this.mario.marioy < this.thirdPlat.y) {
        this.mario.marioy = this.thirdPlat.y - this.mario.marioh;
      }
    }
  };
  //Fourth floor
  checkMarioFourthPlatCollision = () => {
    if (
      this.mario.mariox >= this.fourthPlat.x + this.fourthPlat.w &&
      this.mario.mariox + this.mario.mariow <= this.fourthPlat.x &&
      this.mario.marioy < this.fourthPlat.y + this.fourthPlat.h &&
      this.mario.marioh + this.mario.marioy > this.fourthPlat.y
    ) {
      if (this.mario.marioy < this.fourthPlat.y) {
        this.mario.marioy = this.fourthPlat.y - this.mario.marioh;
      }
    }
  };
  // Mario and Flower Collision.
  checkMarioFlowerCollision = (eachFlowerParam) => {
    if (
      this.mario.mariox < eachFlowerParam.x + eachFlowerParam.w &&
      this.mario.mariox + this.mario.mariow > eachFlowerParam.x &&
      this.mario.marioy < eachFlowerParam.y + eachFlowerParam.h &&
      this.mario.marioh + this.mario.marioy > eachFlowerParam.y
    ) {
      this.flower.splice(0, 1);
      marioStar.play();
    }
  };


  gameLoop = () => {
    //1. limpiar el canvas.
    this.clearCanvas();
    //2. mover los elementos u otras acciones.
    this.goomba.goombaMove();
    this.checkmarioLuigiCollision();
    this.checkMariofirstPlatCollision();
    this.checkMarioSecondPlatCollision();
    this.checkMarioThirdPlatCollision();
    this.checkMarioFourthPlatCollision();
    this.mario.updatePosition();
    this.goombaArr.forEach((eachGoomba) => {
      eachGoomba.goombaMove();
    });
    this.spawningGoomba();
    this.goombaArr.forEach((eachGoomba) => {
      this.checkmarioGoombaCollision(eachGoomba);
    });
    this.flower.forEach((eachFlower) => {
      this.checkMarioFlowerCollision(eachFlower);
    });
    


    //3. dibujar los elementos.
    //draw Pj's.
    this.drawBackGround();
    this.mario.drawMario();
    this.luigi.drawLuigi();
    this.goombaArr.forEach((eachGoomba) => {
      eachGoomba.drawGoomba();
    });
    this.flower.forEach((eachFlower) => {
      eachFlower.drawFlower();
    });
    //draw platforms.
    this.firstPlat.drawFloor();
    this.secondPlat.drawPlatform();
    this.thirdPlat.drawPlatTop();
    this.fourthPlat.drawFloorBoss();

    //4. la recursion para la animacion.
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop); //llamar a la funcion dentro de ella misma.
    }
  };
}
