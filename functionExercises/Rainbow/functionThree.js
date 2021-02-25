//array of circles 
let circles = [];

//setting up the document 
function setup() {
  createCanvas(500, 500);
}

col = random([0],[255]);
z = random([0],[255]);
d = random([0],[255]);

function draw() {
    //creates rgb color scheme background to add some cool stuff
    col = random([0],[255]);
    z = random([0],[255]);
    d = random([0],[255]);
    col,z,d = mouseX/3;
    background (col,z,d);

//draws circles during the array length and uses a for loop to execute command correctly. 
  for(let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.y++;
    fill("black");
    circle(c.x, c.y, 25);
  }
}

//well mouse is being dragged, the circles will continue to be produced. Therefore user, doesn't have to click forever. 
function mouseDragged() {
  circles.push(new p5.Vector(mouseX, mouseY));
}