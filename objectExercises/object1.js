//Setup Canvas 
function setup(){
    createCanvas(1040,520);
}
//Circle Goes Along the Screen, Expanding. 
let circle = {
    x: 10, y: 10, z: 10,
    velocityX: 1, velocityY: 1, velocityZ: 1,
    color: "purple",
    update:function(){
        fill(this.color);
        ellipse(this.x,this.y, this.z);
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.z += this.velocityZ;
    }
}
//Draw Command
function draw(){
    circle.update();
}
