document.querySelector("div").addEventListener("click",function(){
    for(let i = 10; i < 100; i = i + 10){
        //creates the new div 
        let el = document.createElement("div");
        //makes style of pervious square
        el.style.position = "absolute";
        el.style.backgroundColor = "green";
        //increase size
        el.style.width = (100 + i) + "px";
        el.style.height = (100 + i) + "px";
        //centering
        el.style.top = "50%";
        el.style.left = "50%";
        el.style.transform = "translate(-50%, -50%)";
        //appendChild to create div placement
        if(i < 100){
            document.body.appendChild(el);
        }
}})