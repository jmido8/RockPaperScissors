import { choiceUI } from "./domStrings.js";
import { varObject as vars } from "./gameVariables.js";
import * as ui from "./uiController.js";


//Get the opponents hand
function getOpponentHand() {
    //Store location of img
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
    //Update picture for opponents choice and return value of opponent choice
    ui.updateOpponentPic(oppHand);
    return oppHand;
}


//check if your hand beats the opponents hand
function checkIfWon(yourHand, oppHand) {

    //Outcomes for playing rock
    if (yourHand === "rock") {
        //tie
        if (oppHand === "rock") {
            vars.results = "Tie";
            console.log("It's a tie");

        //lose
        } else if (oppHand === "paper") {
            vars.results = "Lose";
            console.log("You lose, sorry.");

        //win
        } else {
            // debugger
            vars.results = "Win";
            console.log("You win!");
            vars.score +=1;
        }
    //Outcomes for playing paper
    } else if (yourHand === "paper") {
        //tie
        if (oppHand === "paper") {
            vars.results = "Tie";
            console.log("It's a tie");
        //lose
        } else if (oppHand === "scissors") {
            vars.results = "Lose";
            console.log("You lose, sorry.");

        //win
        } else {
            // debugger
            vars.results = "Win";
            console.log("You win!");
            vars.score +=1;
        } 
    //Outcomes for playing scissors
    } else {
        //tie
        if (oppHand === "scissors") {
            vars.results = "Tie";
            console.log("It's a tie");
            
        //lose
        } else if (oppHand === "rock") {
            vars.results = "Lose";
            console.log("You lose, sorry.");

        //win
        } else {
            // debugger
            vars.results = "Win";
            console.log("You win!");
            vars.score +=1;
        } 
    }
    //Increase round count by 1
    vars.rounds += 1;
    console.log("You played: " + yourHand);
    console.log("The opponent played: " + oppHand);

    //Update results UI    
    ui.changeResultColor();

    ui.updateResult();
}

//Starts the game
function playGame(hand) {
    const oppHandNow = getOpponentHand();
    //Compares your hand to the opponents
    checkIfWon(hand, oppHandNow);
    
    //Prints your updated score after the round.
    ui.updateScoreUI();
    console.log("Score: " + vars.score + "/ " + vars.rounds);
    console.log("_______________________");
    console.log(" ");
}

//Starts event listener and matches input to starting the game or resetting UI
export function init() {
    
    //Choose your own hand
    //Store the value of the button clicked
    choiceUI.addEventListener("click", function(event) {
        let THETARGET = event.target.value;
        
        //Updates your picture to the choice you made
        ui.updateMyPic(THETARGET);

        //Only starts the game if you clicked an appropriate button
        if (THETARGET === "rock") {
            playGame(THETARGET);

        } else if (THETARGET === "paper") {
            playGame(THETARGET);

        } else if (THETARGET === "scissors") {
            playGame(THETARGET);

        //Resets game if reset button clicked
        } else if (THETARGET === "reset") {
            vars.score = 0;
            vars.rounds = 0;
            console.clear();
            ui.uiReset(THETARGET);
        }
    });
}