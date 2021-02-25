//color Array for the spot light 
let colorArray = ['red', 'yellow', 'green'];

// container that locks the diameter in place. 
const diameter = 100;
let count = 0;

//setting up Canvas specs
function setup() {
  createCanvas(400, 400);
  background("black");
  drawCircle(colorArray[0]);
}

function draw() {}

//function that once the mouse is clicked the circle will change colors. 
function mouseClicked() {
  if(dist(width / 2, height / 2, mouseX, mouseY) < diameter / 2) { 
    count++;
    drawCircle(colorArray[count % 3]);
  }
}

//container that locks the values for  the circle of the traffic light. 
const drawCircle = (colorCircle) => {
  fill(colorCircle);
  circle(width / 2, height / 2, diameter);
}