const gridContainer = document.querySelector(".grid-container");
let cards = []; //creating a blank array//
let firstCard, secondCard;
let lockBoard = false; //for comparing 2 cards//
let score = 0; //score variable that concerns user attempts//

document.querySelector(".score").textContent = score; //calls out correct class; makes text content equal to score//

fetch("./data/cards.json") //tells function where data is located
  .then((res) => res.json()) //returns a new promise; allows for method chaining//
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

function shuffleCards() { 
  let currentIndex = cards.length, //declaring variables//
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) { //array will loop from back to front//
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; //the items below are placed on this index; stored as a temporary variable//
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  } //will continue until first element of array is reached//
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name); //setting inner HTML of the card element using string template literals//
    cardElement.innerHTML = `
      <div class="front"> 
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement); //adding card element as a child of the grid container//
    cardElement.addEventListener("click", flipCard); //adding event listener to card element//
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this; //causes score to increase by 1//
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true; //makes it so that no other comparisons can be done//

  checkForMatch();
}

function checkForMatch() { //comparing first card's and second card's data name attribute//
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() { //removes click event listeners//
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard(); //empty cards and locks the board//
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000); //will delay function call//
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffleCards();
  score = 0; //sets the score back to 0 upon reset//
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = ""; //deletes all the cards from the container//
  generateCards(); //regenerates all the cards//
}