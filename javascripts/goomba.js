class Goomba{
    constructor(){
        this.x = 200;
        this.y = -50;
        this.w = 50;
        this.h = 50;
        this.img = new Image();
        this.img.src = "./img/goomba.png";
    }

    //metodos para Goomba.

    drawGoomba = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};








}