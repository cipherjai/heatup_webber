// Code goes here
// BlackJack by Jai Gupta


// let card1 = "Ace of Spades",
//     card2 = "Ten of Hearts";

// instead using Arrays

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six','Five', 'Four', 'Three', 'Two'];
let deck = ['x', 'y', 'z', 'a', 'b'];


console.log("Welcome to BlackJack");
console.log("You are dealt: ");
console.log(" " + playerCards[0] + "\n " + playerCards[1]);

// function to create a deck
function fCreateDeck() {
    // printing the deck - dummy
    let deckCards = [];
    for(let suitIdx = 0; suitIdx < suits.length; suitIdx ++){

        // for the cards
        for(let cardIdx = 0; cardIdx < values.length; cardIdx ++){
            deckCards.push( values[cardIdx] + ' of ' + suits[suitIdx]);
        }
    }
    return deckCards;
}

// function to get next card(s)
function fGetNextCard() {
    return deck.shift();
}

// Create a deck for use
let deck = fCreateDeck();

//player cards to show
let playerCards = [ fGetNextCard(), fGetNextCard()];

console.log(deckCards);
console.log(deckCards.length);


//

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}


tempArray.shuffle();

// and the result is...
alert(tempArray);