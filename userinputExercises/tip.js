//function calculates the tipvalue and the final total all in one function :) 
function sayTotal(){

    //obtains the total of the bill
    let moneyTotal = document.querySelector("#moneyTotal");

    //The typical tip precentage is around 15% 
    let tip = 0.15;

    //Tipvalue calculates the amount of money you should tip based on the math. 
    let tipValue = moneyTotal.value * tip;

    //Total calculates the final total. For some reason console.logs suck at addition, so I had to subtract the tip from the total and then add the tip value back twice!! 
    let total = (moneyTotal.value - tipValue + (tipValue * 2));

    //Outputs the information into the console log. 
    console.log("Tip: $"+tipValue+"." + " " + "Total: $"+total+".");
}