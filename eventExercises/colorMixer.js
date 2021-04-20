//get elements
var dvSpeak = document.querySelector("#speak");
var btnOne = document.querySelector("#btnOne");
var btnTwo = document.querySelector("#btnTwo");
var btnThree = document.querySelector("#btnThree");
var btnFour = document.querySelector("#btnFour");
var btnFive = document.querySelector("#btnFive");
var btnSix = document.querySelector("#btnSix");
var btnSeven = document.querySelector("#btnSeven");
var btnEight = document.querySelector("#btnEight");
var btnNine = document.querySelector("#btnNine");
var colorDiv = document.querySelector("#colorDiv");

//Starting RGB value of the box. 
var redVal = 0;
var blueVal = 0;
var greenVal = 0;

//add event listeners
btnOne.addEventListener("click", dealWithAClick1);
btnTwo.addEventListener("click", dealWithAClick2);
btnThree.addEventListener("click", dealWithAClick3);
btnFour.addEventListener("click", dealWithAClick4);
btnFive.addEventListener("click", dealWithAClick5);
btnSix.addEventListener("click", dealWithAClick6);
btnSeven.addEventListener("click", dealWithAClick7);
btnEight.addEventListener("click", dealWithAClick8);
btnNine.addEventListener("click", dealWithAClick9);

//Tracks clicks on the buttons
//Red (R) add 1 
function dealWithAClick1(event) {
  redVal = redVal + 1;
  colorChange();
}
//Blue (B) add 1
function dealWithAClick2(event) {
  blueVal = blueVal + 1;
  colorChange();
}
//Green (G) add 1
function dealWithAClick3(event) {
  greenVal = greenVal + 1;
  colorChange();
}
//Red (R) add 5
function dealWithAClick4(event) {
  redVal = redVal + 5;
  colorChange();
}
//Blue (B) add 5
function dealWithAClick5(event) {
  blueVal = blueVal + 5;
  colorChange();
}
//Green (g) add 5
function dealWithAClick6(event) {
  greenVal = greenVal + 5;
  colorChange();
}
//Red (R) add 10
function dealWithAClick7(event) {
  redVal = redVal + 10;
  colorChange();
}
//Blue (B) add 10
function dealWithAClick8(event) {
  blueVal = blueVal + 10;
  colorChange();
}
//Green (g) add 10
function dealWithAClick9(event) {
  greenVal = greenVal + 10;
  colorChange();
}

//Changes RGB color (mixer)
function colorChange(){
    document.getElementById('rgbCode').textContent = "Current Color: "+ "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
    colorDiv.style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")"
  }