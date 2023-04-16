let cards = [

    {
        value: 2,
        file: "images/2_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 2,
        file: "images/2_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 2,
        file: "images/2_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 2,
        file: "images/2_of_spades.png",
        aceOrNot: false

    },
    {
        value: 3,
         file: "images/3_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 3,
         file: "images/3_of_diamonds.png",
        aceOrNot: false
    },
    {
        value: 3,
         file: "images/3_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 3,
         file: "images/3_of_spades.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 4,
         file: "images/4_of_spades.png",
        aceOrNot: false

    },
    {
        value: 5,
        file: "images/5_of_spades.png",
        aceOrNot: false

    },
    {
        value: 5,
         file: "images/5_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 5,
         file: "images/5_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 5,
         file: "images/5_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 6,
         file: "images/6_of_spades.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 7,
         file: "images/7_of_spades.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 8,
         file: "images/8_of_spades.png",
        aceOrNot: false
 
    },
    {
        value: 9,
         file: "images/9_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 9,
         file: "images/9_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 9,
         file: "images/9_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 9,
         file: "images/9_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/10_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/jack_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/king_of_spades.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_clubs.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_diamonds.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_hearts.png",
        aceOrNot: false

    },
    {
        value: 10,
         file: "images/queen_of_spades.png",
        aceOrNot: false

    },
    {
        value: 11,
        file: "images/ace_of_clubs.png",
        aceOrNot: true

    },
    {
        value: 11,
        file: "images/ace_of_hearts.png",
        aceOrNot: true

    },
    {
        value: 11,
        file: "images/ace_of_diamonds.png",
        aceOrNot: true

    },
    {
        value: 11,
        file: "images/ace_of_spades.png",
        aceOrNot: true

    }
]

// Function to shuffle cards
function shuffle(cards){
    let shuffled = [];

    for(let i = 0; i <= 51; i++){

        let card = cards.splice(Math.floor(Math.random() * (52-i)), 1);
        shuffled.push(card[0]);
    }

    return shuffled;
    
    
}

let shuffled = shuffle(cards);

let playerScore = 0;
let dealerScore = 0;
let dealerArr = [];
let playerArr = [];
let dealAceDeduct = false;
let playAceDeduct = false;
let dealAceCount = 0;
let playAceCount = 0;
let playerWins = 0;
let dealerWins = 0;
let usedCards = [];
let money = 500;
let betMoney = 0;

let dealerHand = document.querySelector('#dealer-hand');
let playerHand = document.querySelector('#player-hand');
let dScore = document.querySelector('#dealer-points');
let pScore = document.querySelector('#player-points');
let dealBtn = document.querySelector('#deal-button');
let hitMeBtn = document.querySelector('#hit-button');
let stand = document.querySelector('#stand-button');
let message = document.querySelector('#messages');
let box = document.querySelector('.btnBox');
let playAgainBtn = document.createElement('button');
playAgainBtn.setAttribute('id', 'play-button');
playAgainBtn.setAttribute('type', 'button');
playAgainBtn.innerText = 'Play Again';
let playWinCount = document.createElement('div');
playWinCount.setAttribute('class', 'playWins');
let dealWinCount = document.createElement('div');
dealWinCount.setAttribute('class', 'dealWins');
let winsBox = document.querySelector('.winsBox');
winsBox.append(playWinCount);
winsBox.append(dealWinCount);
playWinCount.innerText = 'Player Wins: ' +playerWins;
dealWinCount.innerText = 'Dealer Wins: ' +dealerWins;
let betBtn = document.createElement('button');
betBtn.setAttribute('type', 'button');
betBtn.setAttribute('class', 'bet')
betBtn.innerText = 'Bet';
let betBox = document.querySelector('.betBox');
betBox.append(betBtn);
let moneyText = document.querySelector('.money');
moneyText.innerText += money;






let dealPlayer = function(shuffled){

    let cardObj = shuffled[shuffled.length-1];

    let newCard = document.createElement('img');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('src', cardObj.file);
    newCard.setAttribute('data-value', cardObj.value );
    newCard.setAttribute('data-ace', cardObj.aceOrNot);
    playerHand.append(newCard);
    playerArr.push(cardObj);
    shuffled.pop();
    
    if(cardObj.aceOrNot === true){
        if(confirm(`
        Choose "OK" for Ace to count as 11.
        Choose "Cancel" for Ace to count as 1.
        `)){
            cardObj.value = 11;
        } else {
            cardObj.value = 1;
        }
    }
    
    playerScore += cardObj.value;
    pScore.innerText = playerScore;

    if(playerScore > 21){
        message.innerText = "You busted! You lose."
        disableBtns();
        roundOver();
        dealerWins += 1;
    } else if(playerScore === 21){
        message.innerText = "You got 21! You win!"
        disableBtns();
        roundOver();
        playWins();
    }
    // console.log(betMoney);

}

let hasAce = function(arr){

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i].aceOrNot === true){

            return true;
            
        }
    }
}

let dealDealer = (shuffled)=>{

    let cardObj = shuffled[shuffled.length-1];

    let newCard = document.createElement('img');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('src', cardObj.file);
    newCard.setAttribute('data-value', cardObj.value );
    newCard.setAttribute('data-ace', cardObj.aceOrNot);
    dealerHand.append(newCard);
    dealerArr.push(cardObj);
    shuffled.pop();

    if(cardObj.aceOrNot === true){
        if(cardObj.value + dealerScore <= 21){
            cardObj.value = 11;
        } else {
            cardObj.value = 1;
        }
    }
    
    dealerScore += cardObj.value;
    dScore.innerText = dealerScore;

    if(dealerScore > 21){
        message.innerText = "Dealer busted! You win!"
        disableBtns();
        roundOver();
        playWins();
    } else if (dealerScore === 21){
        message.innerText = "Dealer got 21. Dealer wins."
        disableBtns();
        roundOver();
        dealerWins += 1;
    }

}

let firstDeal = function(){

    dealPlayer(shuffled);
    
    dealDealer(shuffled);

    dealPlayer(shuffled);

    dealDealer(shuffled);


}


dealBtn.addEventListener('click', (e) =>{

    firstDeal();

    dealBtn.disabled = true;

})


hitMeBtn.addEventListener('click', (e)=>{

    if(dealerScore >= 17){
        dealPlayer(shuffled);
    } else {
        dealPlayer(shuffled);
    dealDealer(shuffled);

    }
})


stand.addEventListener('click', (e)=> {

    if(dealerScore <= 17 && dealerScore > playerScore){
        message.innerText = "You lose."
        disableBtns();
        roundOver();
        dealerWins += 1;
    } else if(dealerScore >= 17 && dealerScore < playerScore){
        dealDealer(shuffled);
    } else if (dealerScore <= 17 && dealerScore <playerScore){
        dealDealer(shuffled);
    } else if(dealerScore === playerScore){
        message.innerText = "You tied."
        disableBtns();
        roundOver();
        money += betMoney;
    } else{
        message.innerText = "You lose."
        disableBtns();
        roundOver();
        dealerWins += 1;
    }
    

})


let disableBtns = function (){
    hitMeBtn.disabled = true;
    stand.disabled = true;
}

// emptys contents of a dom element
// used for removing cards from hands
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }

let reset = function(){

    stand.disabled = false;
    hitMeBtn.disabled = false;
    dealBtn.disabled = false;

    playerScore = 0;
    dealerScore = 0;

    shuffled = shuffled.concat(dealerArr);
    shuffled = shuffled.concat(playerArr);
    
    playerArr = [];
    dealerArr = [];

    empty(playerHand);
    empty(dealerHand);

    dScore.innerText = 0;
    pScore.innerText = 0;

    message.innerText = "";

    shuffled = shuffle(shuffled);
    betMoney = 0;

}

let roundOver = function(){

    box.append(playAgainBtn);

}

playAgainBtn.addEventListener('click', (e)=>{

    reset();

    playWinCount.innerText = 'Player Wins: ' +playerWins;
    dealWinCount.innerText = 'Dealer Wins: ' +dealerWins;

})

betBtn.addEventListener('click', (e)=>{

    let howMuch = Number(prompt("How much money do you want to bet?", "Number of dollars"));
    if(typeof howMuch !== 'number'){
        alert('That was not a valid number');
    } else if (howMuch > money){
        alert('You dont have enough money for that!')
    } else {
        betMoney += howMuch;
        money -= betMoney;
        moneyText.innerText = '$' + money;
    }
    console.log(howMuch);
})

let playWins = function(){
    money += (betMoney * 2);
    playerWins +=1
    moneyText.innerText = 'S' + money;
}










