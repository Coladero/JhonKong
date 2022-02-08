class Goomba {
  constructor(pasYPAram,srcParam) {
    this.x = Math.random()*700 - 7;
    this.y = pasYPAram;
    this.w = 50;
    this.h = 50;
    this.img = new Image();
    this.img.src = srcParam;
  }

  //metodos para Goomba.

  drawGoomba = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  goombaMove = () => {
    this.y = this.y + 2;
  };
}
