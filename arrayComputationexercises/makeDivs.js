function badWordCatch(){
    var numberInput = document.getElementById("numberInput").value;
    var strArray = numberInput.split(",");
//collects the 5 values
    var a = strArray[0];
    var b = strArray[1];
    var c = strArray[2];
    var d = strArray[3];
    var e = strArray[4]; 
//gains average
    var average = (a * b * c * d * e) / 5;
    console.log(average);
//gains sum
    var sum = strArray.reduce(function(acc, val){
        return acc + val;
    }, 0);
//displays sum
    document.getElementById("sum").innerHTML = "The sum is:" +" "+ sum;
//dispalys average. 
    document.getElementById("average").innerHTML = "The average is:" +" "+ average;
}
