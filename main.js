
//Save the score as 0
let score = 0;

function getOpponentHand() {
    //Generate a random number between 1 - 3.
    let oppHand = ""; 
    const OPPONENTNUMBER = Math.floor((Math.random() * 3) + 1); 

    //Assign the number to a rock, paper, scissors string
    if (OPPONENTNUMBER === 1) {
        oppHand = "rock";
    } else if (OPPONENTNUMBER === 2) {
        oppHand = "paper";
    } else {
        oppHand = "scissors";
    }
    console.log("Opponent hand: " + oppHand);
    return oppHand;
}

function chooseHand() {
    //Preps the clickable area to get your hand choice
    let choiceUI = document.querySelector(".playerContainer");

    //Store the value of the button clicked
    choiceUI.addEventListener("click", function(event) {
        const THETARGET = event.target.value;
        console.log(THETARGET);

        //Only starts the game if you clicked an appropriate button
        if (THETARGET === "rock" || THETARGET === "paper" || THETARGET === "scissors"){
        playGame(THETARGET);
        } 
    });
    
}

function checkIfWon(yourHand, oppHand) {
    //check if your hand beats the opponents hand
    const displayOpponentHand = function() {
        console.log("The opponent played: " + oppHand);
    }

    //Outcomes for playing rock
    if (yourHand === "rock") {
        //tie
        if (oppHand === "rock") {
            displayOpponentHand();
            console.log("It's a tie");
            return;
        //lose
        } else if (oppHand === "paper") {
            displayOpponentHand();
            console.log("You lose, sorry.");
            return;
        //win
        } else {
            displayOpponentHand();
            console.log("You win!");
            score +=1;
            return;
        }
    //Outcomes for playing paper
    } else if (yourHand === "paper") {
        //tie
        if (oppHand === "paper") {
            displayOpponentHand();
            console.log("It's a tie");
            return;
        //lose
        } else if (oppHand === "scissors") {
            displayOpponentHand();
            console.log("You lose, sorry.");
            return;
        //win
        } else {
            displayOpponentHand();
            console.log("You win!");
            score +=1;
            return;
        } 
    //Outcomes for playing scissors
    } else {
        //tie
        if (oppHand === "scissors") {
            displayOpponentHand();
            console.log("It's a tie");
            return;
        //lose
        } else if (oppHand === "rock") {
            displayOpponentHand();
            console.log("You lose, sorry.");
            return;
        //win
        } else {
            displayOpponentHand();
            console.log("You win!");
            score +=1;
            return;
        } 
    }
}


function playGame(hand) {
    //play game by comparing your hand to opponent
    checkIfWon(hand, getOpponentHand());
    console.log("Score: " + score);
}

chooseHand();
