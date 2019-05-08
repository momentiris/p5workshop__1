// let edges
// let paddle
// let ball
// let bricks = []

const ROWS = 9
const COLUMNS = 16
const BRICK_MARGIN = 4
const BRICK_W = 40
const BRICK_H = 20
let temp = false
// const WALL_OFFSET = 20

// const BALL_SPEED = 7
// const BALL_SIZE = 10

// class Ball {
//   constructor() {
//     this.speed = BALL_SPEED
//     this.pos = createVector(width / 2, height - 200)
//     this.vel = createVector(random(-1, 1), -1).mult(this.speed)
//     this.size = BALL_SIZE
//   }

//   update() {
//     this.pos.add(this.vel)
//     this.bounce()
//   }

//   bounce() {
//     if (this.pos.x - 10 <= WALL_OFFSET || this.pos.x + 30 >= width) {
//       this.vel.x *= -1
//     }
//     if (this.pos.y - 10 <= WALL_OFFSET) {
//       this.vel.y *= -1
//     }
//   }

//   bounceBack() {
//     this.vel.y *= -1
//   }

//   show() {
//     ellipse(this.pos.x, this.pos.y, this.size, this.size)
//   }
// }

// class Brick {
//   constructor(x, y, w, h) {
//     this.x = x
//     this.y = y
//     this.w = w
//     this.h = h
//   }

//   hit(ball) {
//     return (
//       ball.pos.x > this.x &&
//       ball.pos.x < this.x + this.w + ball.size &&
//       ball.pos.y > this.y &&
//       ball.pos.y < this.y + this.h + ball.size
//     )
//   }

//   show() {
//     rect(this.x, this.y, this.w, this.h)
//   }
// }

// class Paddle {
//   constructor() {
//     this.size = width / 6
//     this.speed = 7
//     this.pos = createVector(width / 2 - this.size / 2, height - 60)
//   }

//   move(pos) {
//     this.pos.x = mouseX
//   }

//   show() {
//     rect(this.pos.x - this.size / 2, this.pos.y, this.size, 10)
//   }

//   hit(ball) {
//     return (
//       ball.pos.y + ball.size / 2 > this.pos.y &&
//       Math.abs(ball.pos.x - this.pos.x) < this.size / 2
//     )
//   }

//   update() {
//     this.pos.x = constrain(
//       this.pos.x,
//       this.size / 2 + 20,
//       width - this.size / 2 - 20
//     )
//   }
// }

// const edge = (x, y, w, h) => rect(x, y, w, h)

const setupBricks = () => {
  var offsetX = width / 2 - ((COLUMNS - 1) * (BRICK_MARGIN + BRICK_W)) / 2
  var offsetY = 120

  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLUMNS; c++) {
      bricks.push(
        new Brick(
          offsetX + c * (BRICK_W + BRICK_MARGIN),
          offsetY + r * (BRICK_H + BRICK_MARGIN),
          BRICK_W,
          BRICK_H
        )
      )
    }
  }
}

// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight)
//   fill(255)
//   noStroke()

//   paddle = new Paddle(width / 2 - 50, height - 50)
//   ball = new Ball()

//   setupBricks()
// }

// function draw() {
//   background(247, 134, 131)

//   edge(WALL_OFFSET, height - WALL_OFFSET, width - WALL_OFFSET * 1.5, 10)
//   edge(WALL_OFFSET, WALL_OFFSET / 2, width - 30, 10)
//   //left
//   edge(WALL_OFFSET / 2, WALL_OFFSET / 2, 10, height - WALL_OFFSET)
//   //right
//   edge(width - WALL_OFFSET, WALL_OFFSET, 10, height - 30)

//   for (let i = bricks.length - 1; i >= 0; i--) {
//     bricks[i].show()
//     if (bricks[i].hit(ball)) {
//       ball.bounceBack()
//       bricks.splice(i, 1)
//     }
//   }

//   paddle.show()
//   paddle.move()
//   paddle.update()

//   ball.show()
//   ball.update()

//   if (paddle.hit(ball)) {
//     ball.bounceBack()
//   }
// }

class Tile {
  constructor(x, y, w, h) {
    this.w = w
    this.h = h
    this.x = x
    this.y = y
    this.spin = 0
  }

  update() {
    this.h = lerp(this.x, this.y, mouseX * 0.01) * 0.01
    // this.h = lerp(this.x, this.y, mouseY)

    this.h = mouseX * 0.1
    this.w = mouseY * 0.1
  }

  spinner() {
    rotate((this.spin += 0.0001))
  }

  show() {
    rect(this.x, this.y, this.w, this.h)
  }
}
let tiles = []
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  rectMode(CENTER)
  noStroke()
  fill(255)

  var offsetX = width / 2 - ((COLUMNS - 1) * (BRICK_MARGIN + BRICK_W)) / 2
  var offsetY = 120

  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLUMNS; c++) {
      tiles.push(
        new Tile(
          offsetX + c * (BRICK_W + BRICK_MARGIN),
          offsetY + r * (BRICK_H + BRICK_MARGIN),
          BRICK_W,
          BRICK_H
        )
      )
    }
  }
}

let spin = 0
function draw() {
  background(247, 134, 131)
  let v1 = createVector(mouseX, mouseY)

  for (let x = 0; x < tiles.length; x++) {
    tiles[x].show()
    tiles[x].update()
  }
}

function mousePressed() {
  temp = true
}

function mouseReleased() {
  temp = false
}
