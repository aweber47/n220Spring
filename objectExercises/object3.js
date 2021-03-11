//Circle's Origin, which is the center of the page. 
let x = 250;
let y = 250;
//Canvas setup 
function setup(){
    createCanvas(500,500);
}
//Circle and the if statements correclty move the circle around the canvas at a moving pace of 2 ticks. 
let circle = {
    x: 100, y: 100, z: 50, r: 50,
    color: "red",
    update:function(){
        if (keyIsDown(LEFT_ARROW)) {
            x -= 2;
          }
        
          if (keyIsDown(RIGHT_ARROW)) {
            x += 2;
          }
        
          if (keyIsDown(UP_ARROW)) {
            y -= 2;
          }
        
          if (keyIsDown(DOWN_ARROW)) {
            y += 2;
          }
        
          clear();
          fill("red");
          ellipse(x, y, 50, 50);
    }
}
//Updates the circles movements 
function draw(){
    circle.update();
}
