//window size used as variables to control the environment of the program. 
var a = 1366; 
var b = 784;

//setting up the canvas
function setup(){
    createCanvas(a, b);
    background(0);
}

//programming the mouse controls 
let dancingCircles = {
    update:function(){
        if(mouseIsPressed == true){
            //change the fill to where it literally becomes the brightness for the ellispes, simillar concept to that of the radius.
            fill("white",int(random("white")),0);
            //change the radius to where it gets smaller the closer it gets to the x-axis origin.
            radius =((a/2) - mouseX);
            //draws circles
            ellipse(mouseX,mouseY,radius,radius);
        }
         //the mouse will be in this released stage, where the circles will not be drawn. 
        if(mouseIsPressed == false){
        }
        //Prevents circles being drawn passed the buttom of the window. 
        if( 0 > mouseX < -784){
            fill("black");
            ellipse(mouseX,mouseY,radius,radius);
        }
    }
}
//using the circles as objects. 
function draw(){
    dancingCircles.update();
}
