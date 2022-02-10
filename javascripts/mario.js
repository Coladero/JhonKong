class Mario {
  constructor() {
    this.mariox = 20;
    this.marioy = 500;
    this.mariow = 30;
    this.marioh = 30;
    this.speedX = 15;
    this.speedY = 0;
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
    }
  };

  updatePosition() {
    // this.marioy += this.speedY
    if (this.marioy !== 500) {
      this.marioy++;
    }
  }
}
