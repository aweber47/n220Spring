//creating the canvas
function setup(){
    createCanvas(400, 300);
}
function draw(){
    //Using the mouseX and mouseY variables the draw function will draw infinite circles in blue on the left side, on red circles on the right side. 
    if(mouseX <= 200){
        fill("blue"); 
        ellipse(mouseX,mouseY,25);
    }else{
        fill("red");
        ellipse(mouseX,mouseY,25);
    } 
}