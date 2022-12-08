

let flip = document.querySelectorAll(".flip-card");
let currentCard;
let timeOut; 
let numberFlips = 0;

const numFlips = document.createElement("h2");
numFlips.setAttribute("class", "text-center");
numFlips.innerText = "Number of Flips: " + numberFlips;
document.querySelector(".title-bar").append(numFlips);

flip.forEach(function(card){
    card.addEventListener("click", makeCardFlip)
    card.flipped = false;
});

function makeCardFlip(e){
    const card = e.target.closest(".flip-card");
    let inner = card.querySelector(".flip-card-inner");
    //the card already flipped ignore the click
    if(card.flipped || timeOut){
        return;
    } else {
        inner.style.transform = "rotateY(180deg)";
        card.flipped = true;
    }
    if(!currentCard){
        currentCard = card;
        
    } else if (checkMatch(currentCard, card)) {
        //give player points
        currentCard = null;
    } else {
        timeOut = setTimeout(()=>unFlipCard(card, currentCard),3000)
        card.flipped = false;
        currentCard.flipped = false;
    }
}

function unFlipCard(cardOne, cardTwo){
    let innerOne = cardOne.querySelector(".flip-card-inner");
    let innerTwo = cardTwo.querySelector(".flip-card-inner");
    innerOne.style = "";
    innerTwo.style = "";
    currentCard = null;
    timeOut = null;

}
function checkMatch(cardOne, cardTwo){
    let imgLinkOne = cardOne.querySelector(".flip-card-back img").getAttribute("src");
    let imgLinkTwo = cardTwo.querySelector(".flip-card-back img").getAttribute("src");
    return (imgLinkOne === imgLinkTwo);
}

