//The pyramid in the image is stacked the height of 4, but 0 counts as a row
let no_of_rows = 3;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(200);
    fill("red");
  
    //Sets up the rows
    for (let row = 0; row <= no_of_rows; row++) {
      
        // Caluculates the number of squares per column. 
        for (let column = 0; column <= row ; column ++) {
           square(column * 50, row * 50, 50);
        }
    }
}
