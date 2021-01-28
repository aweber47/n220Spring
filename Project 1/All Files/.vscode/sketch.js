function setup() {
  createCanvas(750, 400);
  background(0);
  stroke(150);
  strokeWeight(3);
  strokeCap(SQUARE);
//these variables and lines are used to create the tails of the King space attacker
  let x = 30;
  let y = 50;
  let z = 70; 

  line(x, y, x+z, y);
  line(x, y + 5, x + z, y -3);
  line(x, y + 10, x + z, y - 4);
  line(x, y + 15, x + z, y - 5);
}

function draw() {
//All ellipses are the space attackers.
  fill("blue");
  ellipse(75,55,50,50);
  fill("red");
  ellipse(88,52,20,20);
  fill("blue");
  ellipse(70,165,25,25);

  fill("blue");
  ellipse(150,20,30,30);
  ellipse(150,70,30,30);

  fill("blue");
  ellipse(250,35,30,30);
  ellipse(250,105,30,30);


  fill("blue");
  ellipse(300,15,30,30);
  ellipse(300,155,30,30);

//Roof of the building 
  fill("darkred");
  rect(150,125,100,50);

//Lazer 'beams' coming from the space attack. 
  fill("red");
  triangle(250,175,100,50,30);
  triangle(250,125,100,50,35);
  triangle(250,150,100,50,25);

//Outside interior of building
  fill("grey");
  rect(100,175,200,50);

  //Door to the building
  fill("black");
  rect(175,176,50,50);

}
