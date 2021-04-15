function badWordCatch(){

    var wordInput = document.getElementById("wordInput").value;

    // split the words by spaces (" ")
    var arr = wordInput.split(" ");

    // bad words to look for
    var badWords = ["clear", "water", "tires"];
    var index , totalWordAmount = 0, totalWordsFoundList = '';
    for(index=0;index<arr.length; ++index){
        //use arr.indexOf to cache the number of words within the index and correlate their relationship to the bad words
        if(arr.indexOf( arr[index], badWords) > -1){
            totalWordAmount = totalWordAmount + 1;
            totalWordsFoundList = totalWordsFoundList+' '+ arr[index]; 
        }
    }
     //Outputs the bad words that were found.
     document.getElementById("wordsFound").innerHTML = totalWordsFoundList;
     //Outputs the number of bad words found. 
     document.getElementById("wordAmount").innerHTML = totalWordAmount;
}