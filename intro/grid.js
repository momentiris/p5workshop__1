const ROWS = 9
const COLUMNS = 16
const BRICK_MARGIN = 4
const BRICK_W = 40
const BRICK_H = 20
let tiles = []

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

class Tile {
  constructor(x, y, w, h) {
    this.w = w
    this.h = h
    this.x = x
    this.y = y
  }

  update() {
    this.h = lerp(this.x, this.y, mouseX * 0.01) * 0.01
    // this.h = lerp(this.x, this.y, mouseY)

    this.h = mouseX * 0.1
    this.w = mouseY * 0.1
  }

  show() {
    rect(this.x, this.y, this.w, this.h)
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
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

function draw() {
  background(247, 134, 131)

  for (let x = 0; x < tiles.length; x++) {
    tiles[x].show()
    tiles[x].update()
  }
}
