class Mario{
    constructor(){
        this.x = 20;
        this.y = 480;
        this.w = 50;
        this.h = 50;
        this.img = new Image();
        this.img.src = "./img/mario-normal.png";
    }

    //metodos para Mario.

    drawMario = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};








}