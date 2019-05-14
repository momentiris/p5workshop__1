# p5.js

[<img src="https://66.media.tumblr.com/df9c1496e01204c6581746c14169037d/tumblr_phiy0gUfQ51r2geqjo1_540.gifv" width="100%" height="300px" style="object-fit: cover">](https://beesandbombs.tumblr.com/)
Today we're going to check out the javacript library [p5.js](https://p5js.org/). p5.js is a library which abstracts away alot of the boring and initially mind boggling details of the canvas API. It's great for playing around with animations, and generally as an introduction to canvas projects, and even programming.

> Try to do everything using [es6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

> It's encouraged, although not obligatory, to work in pairs or groups.

> p5.js has a good [reference section](https://p5js.org/reference/). Check it out.

## You can choose yourself what you would like to do today. If you feel like you don't know where to start, I suggest you remake your ball animation from the canvas assignment, but in p5.js. If you want a bigger assignment, below are a couple of suggestions:

### Make the snake game!\*

### Visit [bees and bombs](https://beesandbombs.tumblr.com/) tumblr page and try to make one of the gifs you find there.

### Make the [breakout](<https://en.wikipedia.org/wiki/Breakout_(video_game)>) game!\*

> \* = there is an example in repo

### Example:

```javascript
const BALL_SPEED = 2
let ball

class Ball {
  constructor(x, y, w, h) {
    this.speed = createVector(BALL_SPEED, BALL_SPEED)
    this.pos = createVector(width / 2, height / 2)
    this.width = w
    this.height = h
  }

  show() {
    ellipse(this.pos.x, this.pos.y, this.width, this.height)
  }

  update() {
    this.pos.add(this.speed)
  }
}

function setup() {
  createCanvas(800, 600)
  fill(255)
  ball = new Ball(width / 2, height / 2, 20, 20)
}

function draw() {
  background(247, 134, 131)
  ball.show()
  ball.update()
}
```

## Helper for making the breakout game

Before we start, create a new directory with the following structure:

```
- p5_workshop
    - index.html
    - sketch.js
```

> Note: Every class object should be in its own file. Do this and thank yourself (and me) later.

> Note: Do everything in whatever order you'd like. Below is a suggestion.

## Part 1

1. Make and render the walls (which the ball will later bounce off)
2. Make and render the ball
3. Make and render the paddle
4. Make and render the brick (that we later will use to make a grid of bricks)
5. Make a grid of bricks

## Part 2

#### Now comes the trickier parts of this assignment. We want to make the objects to care about each others existence and behave according to rules we define for them. We want the ball to bounce off the walls, the paddle and the bricks and we want the bricks to disappear when hit by the ball.

6. Make the ball move
7. Make the ball bounce off the walls
8. Make the ball bounce off the paddle
9. Make the ball bounce off the bricks

## Extra

10. Improve the collision detection
11. Make the ball bounce in an angle in relation to where it hits the paddle.
