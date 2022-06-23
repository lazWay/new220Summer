let lineY = 0;
let lineHeight = 25;
let lineSpeed = 5;

let bottomRectangleHeight = 0;

let bgColor;
let fgColor;

function setup() {
  createCanvas(300, 300);
  bgColor = randomColor();
  fgColor = randomColor();
}

function draw() {
  background(bgColor);
  stroke(fgColor);
  fill(fgColor);

  // draw the falling line
  rect(0, lineY, width, lineHeight);

  // draw the bottom rectangle
  if (bottomRectangleHeight > 0) {
    rect(0, height - bottomRectangleHeight, width, bottomRectangleHeight);
  }

  lineY += lineSpeed;

  // if the line reaches the bottom rectangle,
  // make the bottom rectangle bigger
  if (lineY >= height - bottomRectangleHeight - lineHeight) {
    bottomRectangleHeight += lineHeight;
    lineY = 0;

    // if the bottom rectangle fills the screen, start over
    if (bottomRectangleHeight >= height) {
      bottomRectangleHeight = 0;
      bgColor = fgColor;
      fgColor = randomColor();
    }
  }
}

function randomColor() {
  return color(random(10), random(80), random(120));
}