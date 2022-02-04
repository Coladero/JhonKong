class Mario{
    constructor(){
        this.x = 20;
        this.y = 500;
        this.w = 30;
        this.h = 30;
        this.img = new Image();
        this.img.src = "./img/mario-normal.png";
    }

    //metodos para Mario.

    drawMario = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

    moveMario = () =>{
        
    };








}