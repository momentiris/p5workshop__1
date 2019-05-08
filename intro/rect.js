class Box {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  show() {
    rect(this.x, this.y, this.w, this.h)
  }

  update() {
    this.x = lerp(this.x, mouseX, 0.05)
    this.y = lerp(this.y, mouseY, 0.05)
  }
}

let box
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  rectMode(CENTER)
  noStroke()
  box = new Box(width / 2, height / 2, 100, 100)
}

function draw() {
  background(247, 134, 131)
  box.show()
  box.update()
}
