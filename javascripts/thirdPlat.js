class ThirdPlat{
    constructor(){
        this.x = 0;
        this.y = 170;
        this.w = 650;
        this.h = 35;
        this.img = new Image();
        this.img.src = "./img/platform.png";
    };

    drawPlatTop = () =>{
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    };
};