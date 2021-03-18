//determines variables for the bouncing ball. 
var xBallChange = 5;
var yBallChange = 5;

var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;

//determine variables for the paddle
var xPaddle;
var yPaddle;
var xSpeed = 0.1;
var ySpeed = 0.1;
var paddleWidth = 25;
var paddleHeight = 100;
var started = false;
//contains the score content for the pong game. 
var score = 0;
//Canvas setup
function setup() {
    createCanvas(1000, 500);
  }
  //object containing all the information to execute the bouncing ball movement
let bouncingball = {
    update:function(){
        noStroke();
        ellipse(xBall,yBall, diameter,diameter);
        xBall += xBallChange;
        yBall += yBallChange;
        if (xBall < diameter/2){
            xBallChange *= -1;
        } 
        if (xBall >= 1000 - 0.5*diameter){
            xBallChange = xBall;
            yBallChange = yBall;
            //'respawns' the ball. 
            ellipse(500,250,diameter,diameter);
            document.write("if  the  ball  goes  'bye bye'  refresh  the  page  ");
        }
        if (yBall < diameter/2 || yBall > 500 - diameter){
            yBallChange *= -1;
        }
        //collision testing and point machine
        if ((xBall > xPaddle && xBall < xPaddle + paddleWidth) && (yBall + (diameter/2) >= yPaddle)){
        xBallChange *= -1;
        yBallChange *= -1;
        score++;
        }
        if (!started){
            xPaddle = 900;
            yPaddle = 250;
            started = true;
        }
        //sets up the paddle 
        fill(0,255,255);
        noStroke();
        rect(xPaddle,yPaddle,paddleWidth,paddleHeight);
    
        //displays the score on the screen
        fill("red");
        textSize(24);
        text("Your Score Is: " + score, 10, 25);
    }
}
//Object that contains the moving controlls for the paddle
let paddle = {
    update:function(){
        if(yPaddle < 0){
            yPaddle += 10;
        }
        if(yPaddle <=-500){
            yPaddle += 10;
        }
        if (keyCode === UP_ARROW) {
            ySpeed;
            yPaddle -= 10;
          } else if (keyCode === DOWN_ARROW) {
            yPaddle += 10;
            ySpeed;
          }
        }
}
//draw 
function draw(){
    background(0);
    bouncingball.update();
    paddle.update();
}