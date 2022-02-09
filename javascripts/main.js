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
    // mainTrack.play()
    
      
    
    //ejecutar el juego
    newGame = new Game();
    newGame.gameLoop();
    
    
    
  };
  const youWin = () => {
    //desaparece win screen y aparece pantalla principal.
    youWinScreen.style.display = "none";
    startScreen.style.display = "flex";
  };
  const restartGAme = () => {
    //desaparece game over y aparece pantalla principal.
    gameOverScreen.style.display = "none";
    startScreen.style.display = "flex";
    
    
    
    
    
  };




  // * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);





document.addEventListener('keydown',(event) =>{
  newGame.mario.marioMove(event)
})



let youWinButton = document.querySelector("#youWin-btn");
youWinButton.addEventListener("click", youWin)

let restartButton = document.querySelector("#gameover-screen");
restartButton.addEventListener("click",restartGAme);


//Sounds

let pressStart = new Audio("./audio/pressstart.mp3")
pressStart.volume = 1;
pressStart.preload = "auto";
pressStart.load();



let mainTrack = new Audio("./audio/maintheme.mp3")
mainTrack.volume = 1;
mainTrack.preload = "auto";
mainTrack.load();
mainTrack.muted = false;
let youLose = new Audio("./audio/GameOver.mp3")
youLose.volume = 1;
youLose.preload = "auto";
youLose.load();

let youWinSound = new Audio("./audio/youwin.mp3")
youWinSound.volume = 1;
youWinSound.preload = "auto";
youWinSound.load();

let marioJumpy = new Audio("./audio/mariojump.mp3")
marioJumpy.volume = 1;
marioJumpy.preload = "auto";
marioJumpy.load();