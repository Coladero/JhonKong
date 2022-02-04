
//Aqui se desarolla lo que ocurre en el canvas.
class Game {
    constructor() {
      //todas nuestras propiedades del juego
      this.bg = new Image(); //background del canvas
      this.bg.src = "./img/bg.jpg";
      this.mario = new Mario();
      this.luigi = new Luigi();
      this.goomba = new Goomba();
      this.platform = new Platform();
      this.floor = new Floor();
      this.platTop = new PlatTop();
      this.floorBoss = new FloorBoss();



    }
    //BackGround del canvas.
    drawBackGround = () => {
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
      };
      //Limpiar el canvas.
      clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      };














      gameLoop = () => {
        //1. limpiar el canvas.
        this.clearCanvas();
        //2. mover los elementos u otras acciones.


        //3. dibujar los elementos.
        this.drawBackGround();
        this.mario.drawMario();
        this.luigi.drawLuigi();
        this.goomba.drawGoomba();
        this.platform.drawPlatform();
        this.floor.drawFloor();
        this.platTop.drawPlatTop();
        this.floorBoss.drawFloorBoss();

        //4. la recursion para la animacion.
        requestAnimationFrame(this.gameLoop); //llamar a la funcion dentro de ella misma.
    };
    
}