function badWordCatch() {

    var wordInput = document.getElementById("wordInput").value;
    wordInput = wordInput.toLowerCase();
  
    // split the words by spaces (" ")
    var arr = wordInput.split(" ");
    
    // bad words to look for
    var badWords = ["clear", "water", "tires"];
    
    // .toLowerCase will do the case insensitive match!
    var foundBadWords = arr.filter(el => badWords.includes(el));
    
    //displays the bad words that were found within the sentence. 
    //Displays the number of bad words within the sentence/input. 
    document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ");
    document.getElementById("wordAmount").innerHTML = foundBadWords.length;
    
    
  }