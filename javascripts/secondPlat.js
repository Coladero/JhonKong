class SecondPlat{
    constructor(){
        this.x = canvas.width;
        this.y = 300;
        this.w = -650;
        this.h = 35;
        this.img = new Image();
        this.img.src = "./img/platform.png";
    };

    drawPlatform = () =>{
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    };
};
