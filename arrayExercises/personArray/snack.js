let circles = [];
let counter = [ 1,2,3,4,5,6,7,8,9,10 ];

function setup(){
    createCanvas(500, 500);
    for (var i =0; i < 200; i++){
        circles[i] = new Circle();
    }
}

function mousePressed(){
    circles.push(new Circle(mouseX,mouseY));
}

function draw(){
    background(0);
    for (var i = 0; i < circles.length; i++){
        circles[i].move();
        circles[i].display();
    }
}

function Circle(x, y){
    this.x = x;
    this.y = y;
    
    this.display = function(){
        for(counter = 0; counter <= 10; counter++)   {
            stroke(255);
            fill("lightblue");
            ellipse(this.x, this.y, 50,50);
        }
    }
    this.move = function(){
      this.x = 250;
      this.y = this.y - -5;
}
}
