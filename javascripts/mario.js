class Mario {
  constructor() {
    this.mariox = 20;
    this.marioy = 500;
    this.mariow = 30;
    this.marioh = 30;
    this.speedX = 0;
    this.speedY = 0;
    this.weight = 0.19;
    this.gravity = 15;
    this.img = new Image();
    this.img.src = "./img/mario-normal.png";
  }

  //metodos para Mario.

  drawMario = () => {
    ctx.drawImage(this.img, this.mariox, this.marioy, this.mariow, this.marioh);
  };

  marioMove = (event) => {
    if (event.key === "ArrowRight" && this.mariox < canvas.width -10) {
      this.speedX = 3;
    } else if (event.key === "ArrowLeft" && this.mariox > 10) {
      this.speedX = -3;
    } else if (event.key === "ArrowUp") {
      jump();
    }
  };

  updatePosition(){
    this.mariox += this.speedX
    this.marioy += this.speedY
    if (this.speedY < this.gravity){
        this.speedY += this.weight
    } 

}

jump(){
    if(this.marioy === 500){
        this.speedY = -7.5;
        marioJumpy.play()
    }                           
}
checkLimits(){


  if(this.marioy > 500){
      this.marioy = 500
  }


}

}
