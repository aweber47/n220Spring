//Makes 100 20x20 square cubes. 
var htmlElements = "";
for (let i = 0; i < 100; i++) {
   htmlElements += '<div class = "box" style = "background-color: blue;"><p></p></div>';
}
var container = document.getElementById("container");
container.innerHTML = htmlElements;