//Varibales de lanzamiento
let startScreen = document.querySelector("#start-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let youWinScreen = document.querySelector("#win-screen")
let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let newGame;

//Resto de variables.


//Cuerpo de lanzamiento del juego.

const startGame = () => {
    //desaparecer start creen y aparece canvas.
    startScreen.style.display = "none";
    canvas.style.display = "flex"; // le damos el display que tengamos en el css.
  
    //ejecutar el juego
    newGame = new Game();
    newGame.gameLoop();
  };
  const youWin = () => {
    //desaparece win screen y aparece pantalla principal.
    youWinScreen.style.display = "none";
    startScreen.style.display = "flex";
  
    //ejecutar el juego.
    newGame = new Game();
    console.log(newGame);
    newGame.gameLoop();
  };
  const restartGAme = () => {
    //desaparece game over y aparece pantalla principal.
    gameOverScreen.style.display = "none";
    startScreen.style.display = "flex";
  
    //ejecutar el juego.
    newGame = new Game();
    console.log(newGame);
    newGame.gameLoop();
  };




  // * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

document.addEventListener("keydown",(event) =>{
  newGame.mario.marioMove(event)
})


let youWinButton = document.querySelector("#youWin-btn");
youWinButton.addEventListener("click", youWin)

let restartButton = document.querySelector("#gameover-screen");
restartButton.addEventListener("click",restartGAme);




