let colors = ["#04668C","#726EB7","#DA66AC","#FF6792"]
let positions = [ 0,0,0,0,0,0,0,0,0,0 ];
console.log(positions);

function setup(){
    createCanvas(400, 300);

}

function draw(){
    console.log(positions);    
    background(50);
    
    positions.push( mouseX );
    positions.shift();


for( var i =0; i <colors.length; i++){
    fill(colors[i]);
    circle( positions[i], 150,20);
}
}
