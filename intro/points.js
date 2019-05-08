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
  background(0)
  stroke(255)
  strokeWeight(2)

  for (let x = 0; x < 100; x++) {
    dots.push(new Dot(random(0, width), random(0, height)))
  }
}

function draw() {
  for (let x = 0; x < dots.length; x++) {
    dots[x].show()
  }
}
