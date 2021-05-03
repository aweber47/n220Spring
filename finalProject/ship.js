function Ship() {
    //Ships position.
    this.x = width/2;
    this.xdir = 0;
  //ships colors / size attributes.
    this.show = function() {
      fill("limegreen");
      rectMode(CENTER);
      rect(this.x, height-20, 15, 25);
    }
  //classifying dir function for the moving function to work. 
    this.setDir = function(dir) {
      this.xdir = dir;
    }
  //function that moves the ship around the canvas. 
    this.move = function(dir) {
      this.x += this.xdir*5;
    }
  }