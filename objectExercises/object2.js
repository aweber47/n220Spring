//Setup Canvas, increased canvas size... you will see why...
function setup(){
    createCanvas(1280,600);
    background("black");
}
//Circles Goes Along the Screen, expanding once again, but in relationship with one another. 
let circle = {
    x: 10, y: 10, z: 10,
    velocityX: 1, velocityY: 1, velocityZ: 1,
    color: "blue",
    update:function(){
        fill(this.color);
        ellipse(this.x,this.y, this.z);
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.z += this.velocityZ;
    }
}
//Red Circle
let circleTwo = {
    x: -50, y: -50, z: -50,
    velocityX: 1, velocityY: 1, velocityZ: 1,
    color: "red",
    update:function(){
        fill(this.color);
        ellipse(this.x,this.y, this.z);
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.z += this.velocityZ;
    }
}
//Yellow Circle
let circleThree = {
    x: -100, y: -100, z: -100,
    velocityX: 1, velocityY: 1, velocityZ: 1,
    color: "yellow",
    update:function(){
        fill(this.color);
        ellipse(this.x,this.y, this.z);
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.z += this.velocityZ;
    }
}
//Green Circle
let circleFour = {
    x: -150, y: -150, z: -150,
    velocityX: 1, velocityY: 1, velocityZ: 1,
    color: "green",
    update:function(){
        fill(this.color);
        ellipse(this.x,this.y, this.z);
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.z += this.velocityZ;
    }
}
//Draw Command for the Four circles 
function draw(){
    circle.update();
    circleTwo.update();
    circleThree.update();
    circleFour.update();
}
