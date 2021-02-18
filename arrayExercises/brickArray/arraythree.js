let bricks = [];
let counter = [ 1,2,3,4,5,6,7,8,9,10 ];

function setup(){
    createCanvas(600, 400);
    for (var i =0; i < 200; i++){
        bricks[i] = new Brick();
    }
}

function mousePressed(){
    bricks.push(new Brick(mouseX,mouseY));
    
}

function draw(){
    background(0);
    for (var i = 0; i < bricks.length; i++){
        bricks[i].move();
        bricks[i].display();
    }
}

function Brick(x, y){
    this.x = x;
    this.y = y;
    
    this.display = function(){
        for(counter = 0; counter < 10; counter++)   {
            stroke(255);
            fill("#AD5247");
            rect(this.x,this.y,80,20);
        }
    }
    this.move = function(){
      this.x = this.x;
      this.y = this.y - -5;
}
}
