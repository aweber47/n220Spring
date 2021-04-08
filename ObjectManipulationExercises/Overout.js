var color = ["Black","Blue"];
//addEventListener() method of the onmouseover Event 
document.querySelector("div").addEventListener("mouseover", function () {
    document.querySelector("div").style.background = color[0]; 
})
//addEventLister() Method of onmouseout Event 
document.querySelector("div").addEventListener("mouseout", function (){
    document.querySelector("div").style.background = color[1];
})