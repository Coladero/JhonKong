class Mario {
  constructor() {
    this.mariox = 20;
    this.marioy = 500;
    this.mariow = 30;
    this.marioh = 30;
    this.img = new Image();
    this.img.src = "./img/mario-normal.png";
  }

  //metodos para Mario.

  drawMario = () => {
    ctx.drawImage(this.img, this.mariox, this.marioy, this.mariow, this.marioh);
  };

  marioMove = (event) => {
    if (event.key === "ArrowRight" && this.mariox < canvas.width - 20) {
      this.mariox = this.mariox + 15;
    } else if (event.key === "ArrowLeft" && this.mariox > 0) {
      this.mariox = this.mariox - 15;
    } else if (event.key === "ArrowDown" && this.marioy < canvas.height - 20) {
      this.marioy = this.marioy + 16;
    } else if (event.key === "ArrowUp" && this.marioy > 0) {
      this.marioy = this.marioy - 16;
    }
  };
}
