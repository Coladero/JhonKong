class Goomba {
  constructor() {
    this.x = 20;
    this.y = 0;
    this.w = 50;
    this.h = 50;
    this.img = new Image();
    this.img.src = "./img/goomba.png";
  }

  //metodos para Goomba.

  drawGoomba = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  goombaMove = () => {
    this.y = this.y + 2;
  };
}
