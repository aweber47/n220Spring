//class of the amounts for the ellipses' radius, x,y, etc. 
let x = 50;
let y = 50;
let xspeed = 5;
let yspeed = 2;
let r = 25;


function setup(){
    createCanvas(400,400);
}
function draw(){
    //sets up the background and red box. 
    fill("black");
    rect(0,0, 400,300)
    fill("red");
    rect(0,300,400,100);
    


// controls the movement of the bouncing ball
    fill("blue");
    ellipse(x, y, r*2, r*2);
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
    if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  //if the circle 'collides' with the box it will bounce back instead of colliding through. 
  if (y >= 290){
      yspeed = -yspeed;
  }
}