# p5.js

[<img src="https://66.media.tumblr.com/df9c1496e01204c6581746c14169037d/tumblr_phiy0gUfQ51r2geqjo1_540.gifv" width="100%">](https://beesandbombs.tumblr.com/)
Today we're going check out the javacript library [p5.js](https://p5js.org/). p5.js is a library which abstracts away alot of the boring and initially mind boggling details of the canvas API. It's great for playing around with animations, and generally as an introduction to canvas projects, and even programming.

## You can choose yourself what you would like to do today. But below are a couple of suggestions:

> note: Try to do everything using [es6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Make the [breakout](<https://en.wikipedia.org/wiki/Breakout_(video_game)>) game!

### Example:

```javascript
const BALL_SPEED = 10
let ball

class Ball {
  constructor(x, y, width, height) {
    this.speed = BALL_SPEED
    this.pos = createVector(width / 2, height / 2)
    this.width = width
    this.height = height
  }

  show() {
    ellipse(this.x, this.y, this.radius, this.radius)
  }

  update() {
    this.pos.add(this.velocity)
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
}
```

## Assignments

Before we start, create a new directory with the following structure:

```
- p5_workshop
    - index.html
    - sketch.js
```

Set up default HTML `<!DOCTYPE>` template and include both the index.js (above the closing `</body>` tag). Then go to index.js and do a `console.log('im here')`, just to verify that index.js has been included correctly. Lastly open index.html in your favourite browser (not IE ;)).

> Note: Every class object should be in its own file. Do this and thank yourself (and me) later.

> Note: Do everything in whatever order you'd like. Below is a suggestion.

## Part 1

1. Make and render the walls (which the ball will later bounce off)
2. Make and render the ball
3. Make and render the paddle
4. Make and render the brick (that we later will use to make a grid of bricks)
5. Make a grid of bricks

## Part 2

### Now comes the trickier parts of this assignment. We want to make the objects to care about each others existence and behave according to rules we define for them. We want the ball to bounce off the walls, the paddle and the bricks and we want the bricks to disappear when hit by the ball.

6. Make the ball move
7. Make the ball bounce off the walls
8. Make the ball bounce off the paddle
9. Make the ball bounce off the bricks

## Extra

10. Improve the collision detection
11. Make the ball bounce in an angle in relation where it hits the paddle.
