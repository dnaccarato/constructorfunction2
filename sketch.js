//from Shiffman's video The Constructor Function

var formObject = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 600; i++) {
    formObject[i] = new FormObject();
  }
}

function draw() {
  background(100);
  for (var i = 0; i < formObject.length; i++) {
    formObject[i].move();
    formObject[i].display();
  }
}

function FormObject() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    stroke(255);
    noFill();
    line(this.x, this.y, 170, 24);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-6, 6);

  }
}