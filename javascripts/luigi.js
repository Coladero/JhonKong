class Luigi{
    constructor(){
        this.x = 650;
        this.y = 30;
        this.w = 30;
        this.h = 30;
        this.img = new Image();
        this.img.src = "./img/luigi.png";
    }

    //metodos para Luigi.

    drawLuigi = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};








}