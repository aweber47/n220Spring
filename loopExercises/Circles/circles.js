function setup() {
    createCanvas(600, 600);
    noFill();
  }
  // creates a for loop where an ellipse will be drawn until i is greater than 50. 
  function draw() {
    background("lightgrey");
    
    for(let i = 0; i < 50; i++){
      ellipse(300,300, i * 10);
    }
  }