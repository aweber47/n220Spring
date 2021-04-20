function Card(term, definition, category) {
    this.term = term;
    this.definition = definition;
    //this.category = category;
  }
  var newDeck = [];
  var newCard;
  var front = document.getElementById("front");
  var back = document.getElementById("back");
  var flip = document.getElementById("flip");
  var formFront, formBack;
  
  var card1 = new Card(
    "What is the capital of Indiana?",
    "Indianapolis",
    "General"
  );
  var card2 = new Card(
    "What color is the sky?",
    "Blue most of the time",
    "General"
  );
  var card3 = new Card(
    "What are the colors of IU?",
    "Red and White",
    "Objects"
  );
  var myCards = [card1, card2, card3];
  var cardIndex = 0;
  
  front.innerHTML = card1.term;
  back.innerHTML = card1.definition;
  back.style.visibility = "hidden";

  //Shows the answer to the question
  function flash() {
    if (front.style.visibility != "hidden") {
      front.style.visibility = "hidden";
      back.style.visibility = "visible";
    } else {
      front.style.visibility = "visible";
      back.style.visibility = "hidden";
    }
  }
//like any array, this array keeps track of the answer and the number of questions.
      var newCard = new Card();
      newCard.term = formFront.value;
      newCard.definition = formBack.value;
      myCards.push(newCard);
      cardIndex = myCards.length - 1;
      clearForm();
      updatePlaceholder();
      front.innerHTML = myCards[cardIndex].term;
      back.innerHTML = myCards[cardIndex].definition;
      // back.style.visibility = "hidden";
    
    document.getElementById("newTerm").focus();

  //next question
  function nextCard() {
    cardIndex = (cardIndex + 1) % myCards.length;
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
  }
  //previous question
  function prevCard() {
    if (cardIndex > 0)
      cardIndex = (cardIndex - 1);
    else if (cardIndex == 0) cardIndex = myCards.length-1;
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
  }