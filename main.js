
//Save the score as 0
let score = 0;
let rounds = 0;

//Get the opponents hand
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
    return oppHand;
}

//Choose your own hand
function chooseHand() {
    //Preps the clickable area to get your hand choice
    let choiceUI = document.querySelector(".playerContainer");

    //Store the value of the button clicked
    choiceUI.addEventListener("click", function(event) {
        const THETARGET = event.target.value;

        //Only starts the game if you clicked an appropriate button
        if (THETARGET === "rock" || THETARGET === "paper" || THETARGET === "scissors"){
        playGame(THETARGET);
        } else if (THETARGET === "reset") {
            score = 0;
            rounds = 0;
            console.clear();
        }
    });
    
}

//check if your hand beats the opponents hand
function checkIfWon(yourHand, oppHand) {
    
    //Display what your opponent played
    const displayOpponentHand = function() {
        console.log("The opponent played: " + oppHand);
    }

    //Outcomes for playing rock
    if (yourHand === "rock") {
        //tie
        if (oppHand === "rock") {
            console.log("It's a tie");
        //lose
        } else if (oppHand === "paper") {
            console.log("You lose, sorry.");
        //win
        } else {
            console.log("You win!");
            score +=1;
        }
    //Outcomes for playing paper
    } else if (yourHand === "paper") {
        //tie
        if (oppHand === "paper") {
            console.log("It's a tie");
        //lose
        } else if (oppHand === "scissors") {
            console.log("You lose, sorry.");
        //win
        } else {
            console.log("You win!");
            score +=1;
        } 
    //Outcomes for playing scissors
    } else {
        //tie
        if (oppHand === "scissors") {
            console.log("It's a tie");
        //lose
        } else if (oppHand === "rock") {
            console.log("You lose, sorry.");
        //win
        } else {
            console.log("You win!");
            score +=1;
        } 
    }
    rounds += 1;
    displayOpponentHand();
    console.log("You played: " + yourHand);
}

//Starts the game
function playGame(hand) {
    
    //Compares your hand to the opponents
    checkIfWon(hand, getOpponentHand());
    
    //Prints your updated score after the round.
    console.log("Score: " + score + "/ " + rounds);
    console.log("_______________________");
    console.log(" ");
}

chooseHand();
