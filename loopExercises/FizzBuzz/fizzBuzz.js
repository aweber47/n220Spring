function setup() {
    createCanvas(1500, 1500);
}

function draw() {
    background(200);
    var y = 100;
    //creates 25 black circles onto the screen. 
    for (let i = 0; i < 25; ++ i) {
        let x = i*50; 
        
        if (i % 3 == 0 && i % 5 == 0) {
            // sets the last blue square
            fill("blue");
            square(x, y, 50);
        }
        else if (i % 5 === 0) {
            // sets the green squares should be on top
            fill("green");
            square(x, y, 50);
        }
        else if (i % 3 === 0) {
            // purple circle
            fill("purple");
            ellipse(x+25, y+25, 50, 50);
        }
        else {
            // black circle
            fill("black");
            ellipse(x+25, y+25, 50, 50);
        }
    }
}
