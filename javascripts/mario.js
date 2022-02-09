class Mario {
  constructor() {
    this.mariox = 20;
    this.marioy = 500;
    this.mariow = 30;
    this.marioh = 30;
    this.speedX = 10;
    this.speedY = 130;
    this.weight = 0.19;
    this.gravity = 5;
    this.img = new Image();
    this.img.src = "./img/mario-normal.png";
  }

  //metodos para Mario.

  drawMario = () => {
    ctx.drawImage(this.img, this.mariox, this.marioy, this.mariow, this.marioh);
  };

  marioMove = (event) => {
    if (event.key === "ArrowRight") {
      this.mariox += this.speedX;
    } else if (event.key === "ArrowLeft") {
      this.mariox -= this.speedX;
    } else if (event.key === "ArrowUp") {
      this.jump();
    }
  };

  updatePosition(){
    // this.marioy += this.speedY
    if (this.marioy !== 500){
        this.marioy++
    }
    }

jump(){
    if(this.marioy !== 510){
        this.marioy -= this.speedY;
    }
    if(this.mariox < 650 || this.marioy > this.floor.y){
    this.marioy = 450
    }
    if(this.marioy === this.floor.y || this.mariox < 150){
      this.marioy = 260
    }
        marioJumpy.play()              
  }
}