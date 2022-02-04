//Varibales de lanzamiento
let startScreen = document.querySelector("#start-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let newGame;

//Resto de variables


//Cuerpo de lanzamiento del juego

const startGame = () => {
    //desaparecer splash creen y aparecer canvas
    startScreen.style.display = "none";
    canvas.style.display = "flex"; // le damos el display que tengamos en el css.
  
    //ejecutar el juego
    newGame = new Game();
    console.log(newGame);
    newGame.gameLoop();
  };
  const restartGAme = () => {
    //desaparecer splash creen y aparecer canvas
    gameOverScreen.style.display = "none";
    splashScreen.style.display = "flex";
  
    //ejecutar el juego
    newGame = new Game();
    console.log(newGame);
    newGame.gameLoop();
  };