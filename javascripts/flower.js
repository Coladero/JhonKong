class Flower{
    constructor(){
    this.x = 600;
    this.y = 395;
    this.w = 30;
    this.h =30
    this.img = new Image();
    this.img.src = ("./img/flower.png")
    };

    drawFlower(){
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    }
}