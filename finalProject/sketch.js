//variable setups.
var ship;
var invaders = [];
var bullets = [];
//function setups.
function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for (var i = 0; i < 6; i++) {
    invaders[i] = new Invader(i*80+80, 60);
  }
}
//draw function 
function draw() {
  background(51);
  ship.show();
  ship.move();
//if a bullet hits an invader. 
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < invaders.length; j++) {
      if (bullets[i].hits(invaders[j])) {
        invaders[j].bye();
        bullets[i].poof();
      }
    }
  }
//checks and moves invaders down a row if they hit the edge. 
  var edge = false;

  for (var i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();
    if (invaders[i].x > width || invaders[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < invaders.length; i++) {
      invaders[i].shiftDown();
      console.log("switched");
    }
  }
//removes bullet from screen once intersected by an invader. 
  for (var i = bullets.length-1; i >= 0; i--) {
    if (bullets[i].toDelete) {
      bullets.splice(i, 1);
      console.log(i);
    }
  }
}
//Ship is "always" moving, therefore when key released, the ship stops.
function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

//space bar shots the bullets out of the space ship.
function keyPressed() {
    if (key === ' ') {
      var drop = new Bulletfire(ship.x, height);
      bullets.push(drop);
    }
    //Controls ship movement left - right. 
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}