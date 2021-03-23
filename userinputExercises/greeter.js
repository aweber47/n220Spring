//collects/obtains the given value for the devName text holder. 
let devName = document.querySelector("#devName");

//not really needed, just added it out of habbit
function setup(){
    createCanvas(150,150);
}
//outputs the given name into the dev console
function devHello(){
    console.log("Hello " + devName.value);
}