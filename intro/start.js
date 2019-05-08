let dots = []

class Dot {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  show() {
    point(this.x, this.y)
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)
  rectMode(CENTER)
  stroke(255)
  strokeWeight(2)

  for (let index = 0; index < 100; index++) {
    dots.push(new Dot(random(0, width), random(0, height)))
  }
}

function draw() {
  background(0)
  fill(255)

  for (let index = 0; index < dots.length; index++) {
    dots[index].show()
  }
}
