# Jhon Kong

## Description

Jhon Kong It's a multi-level platform game that will take you back to the 2d era and your favourite characters from your childhood, let yourself be carried away by the rivalry of mario & luigi in its splendour. ENJOY!

## MVP (DOM - CANVAS)

- The Hero have a boost.
- The Hero when he take the boost, change color and cannot be hit.
- The enemy's(Mushrooms) fall from the sky in rain mode. 
- Is you touch Luigui, you win.

## Backlog

- add more levels.
- Make enemies go along the platform.
- Mario can shoot instead of becoming immune.

## Data Structure

# main.js

- buildStartScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addTentacle () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# Mario.js 

- Mario () {
    this.x;
    this.y;
    this.direction;
    this.size;
}
- draw () {}
- move () {}
- inmuneTime(){}
- checkCollision(){}

- # Flower.js 

- Flower () {
    this.x;
    this.y;
    this.size;
}
- draw () {}
- inmuneTime(){}
- checkCollision(){}

# Mushroom.js 

- Mushroom () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionMario () {}

# BadLuigi.js 

- BadLuigi () {
    this.x;
    this.y;
    this.size
}
- draw () {}
- checkCollisionMario () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- StartScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildStartScreen
- main - buildGameScreen
- main - buildGameOverScreen
- main - addEventListener
- game - startLoop
- game - buildCanvas
- game - drawCanvas
- Mushroom - draw
- Mushroom - move
- game - addMushroom
- Luigi - draw
- Luigi- move
- Luigi - shoot
- Flower - draw
- FlowerPosition - Position
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Git
URls for the project repo and deploy
[Link Repo]
[Link Deploy]

### Slides
URls for the project presentation (slides)
[Link Slides.com]
