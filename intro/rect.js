// class Box {
//   constructor(x, y, w, h) {
//     this.x = x
//     this.y = y
//     this.w = w
//     this.h = h
//   }

//   isWithinBounds(mx, my) {
//     return (
//       mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h
//     )
//   }

//   show() {
//     rect(this.x, this.y, this.w, this.h)
//   }

//   update() {}

//   followMouse() {
//     this.x = mouseX - this.w / 2
//     this.y = mouseY - this.h / 2
//   }
// }
// let clicked = false
// let box
// let spin = 0

// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight)

//   noStroke()

//   box = new Box(width / 2, height / 2, 100, 100)
// }

// function draw() {
//   background(247, 134, 131)

//   box.show()
//   box.update()

//   if (clicked && box.isWithinBounds(mouseX, mouseY)) {
//     box.followMouse()
//   }
// }

// function mousePressed() {
//   clicked = true
// }
// function mouseReleased() {
//   clicked = false
// }
