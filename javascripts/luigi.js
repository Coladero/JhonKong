class Luigi{
    constructor(){
        this.x = 650;
        this.y = 50;
        this.w = 50;
        this.h = 50;
        this.img = new Image();
        this.img.src = "./img/luigi.png";
    }

    //metodos para Luigi.

    drawLuigi = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};








}