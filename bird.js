
var rotator = 0;

function Bird() {
  this.y = height/2;
  this.x = 64;
  this.explosionCounter = 0;

  this.gravity = .95;
  this.boosting = 10;
  this.velocity = 0;
  this.flying = 1;


  this.boost = function() {

    this.velocity += this.boosting;

  }

this.up = function() {
  this.velocity += 5;
  this.velocity *= -.3; //this slows ascent
  this.y += this.velocity;
}
this.down = function() {
  this.velocity += 5;
  this.velocity *= -.3 ; //this slows ascent
  this.y -= this.velocity;
}

  this.death = function() {
    translate(-width/2, -height/2);

    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.explosionCounter, this.explosionCounter);
    this.explosionCounter += 1;

  }


  this.show = function() {
    stroke(200, 0, 200);
    fill(150, 0, 200, 150);
    // ellipse(this.x, this.y, 32, 32);
    push();
    translate(this.x, this.y);
    rotateY(PI/2);
    rotateZ(rotator);
    var shipSize = 20;

    beginShape();
    vertex(-shipSize, -shipSize, -shipSize);
    vertex( shipSize, -shipSize, -shipSize);
    vertex(   0,    0,  shipSize);

    vertex( shipSize, -shipSize, -shipSize);
    vertex( shipSize,  shipSize, -shipSize);
    vertex(   0,    0,  shipSize);

    vertex( shipSize, shipSize, -shipSize);
    vertex(-shipSize, shipSize, -shipSize);
    vertex(   0,   0,  shipSize);

    vertex(-shipSize,  shipSize, -shipSize);
    vertex(-shipSize, -shipSize, -shipSize);
    vertex(   0,    0,  shipSize);
    endShape();

    pop();

    rotator += .01;


  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= -.5; //this slows ascent
    this.x += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0 ) {
      this.y = 0;
      this.velocity = 0;
    }
    if (this.x < width/10) {
      this.x = width/10;
    }
  }
}
