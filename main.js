import { init } from "./logicController.js";

init();


//score tracks wins / rounds.
//results tracks state of game (win, tie, lose, new game)

// let score = 0;
// let rounds = 0;
// let results = "New Game";

// //Controls the game logic
// function logicController() {
    
//     //Preps the clickable area to get your hand choice
//     const choiceUI = document.querySelector(".container");

//     //Choose your own hand
//     //Store the value of the button clicked
//     choiceUI.addEventListener("click", function(event) {
//         const THETARGET = event.target.value;

//         //Only starts the game if you clicked an appropriate button
//         if (THETARGET === "rock") {
//             playGame(THETARGET);

//         } else if (THETARGET === "paper") {
//             playGame(THETARGET);

//         } else if (THETARGET === "scissors") {
//             playGame(THETARGET);

//         //Resets game if reset button clicked
//         } else if (THETARGET === "reset") {
//             score = 0;
//             rounds = 0;
//             console.clear();
//             UIController(THETARGET);
//         }
//     });

//     //Get the opponents hand
//     function getOpponentHand() {
//         //Store location of img
//         //Generate a random number between 1 - 3.
//         let oppHand = ""; 
//         const OPPONENTNUMBER = Math.floor((Math.random() * 3) + 1); 

//         //Assign the number to a rock, paper, scissors string
//         if (OPPONENTNUMBER === 1) {
//             oppHand = "rock";
            
//         } else if (OPPONENTNUMBER === 2) {
//             oppHand = "paper";
            
//         } else {
//             oppHand = "scissors";
        
//         }
//         return oppHand;
//     }

    
        

//     //check if your hand beats the opponents hand
//     function checkIfWon(yourHand, oppHand) {

//         //Outcomes for playing rock
//         if (yourHand === "rock") {
//             //tie
//             if (oppHand === "rock") {
//                 results = "Tie";
//                 console.log("It's a tie");

//             //lose
//             } else if (oppHand === "paper") {
//                 results = "Lose";
//                 console.log("You lose, sorry.");

//             //win
//             } else {
//                 results = "Win";
//                 console.log("You win!");
//                 score +=1;
//             }
//         //Outcomes for playing paper
//         } else if (yourHand === "paper") {
//             //tie
//             if (oppHand === "paper") {
//                 results = "Tie";
//                 console.log("It's a tie");
//             //lose
//             } else if (oppHand === "scissors") {
//                 results = "Lose";
//                 console.log("You lose, sorry.");

//             //win
//             } else {
//                 results = "Win";
//                 console.log("You win!");
//                 score +=1;
//             } 
//         //Outcomes for playing scissors
//         } else {
//             //tie
//             if (oppHand === "scissors") {
//                 results = "Tie";
//                 console.log("It's a tie");
                
//             //lose
//             } else if (oppHand === "rock") {
//                 results = "Lose";
//                 console.log("You lose, sorry.");

//             //win
//             } else {
//                 results = "Win";
//                 console.log("You win!");
//                 score +=1;
//             } 
//         }
//         //Increase round count by 1 and display player/opponent hands
//         rounds += 1;
//         console.log("You played: " + yourHand);
//         console.log("The opponent played: " + oppHand);
//     }

//     //Starts the game
//     function playGame(hand) {
//         const oppHandNow = getOpponentHand();
//         //Compares your hand to the opponents
//         checkIfWon(hand, oppHandNow);
        
//         //Prints your updated score after the round.
//         UIController(hand, oppHandNow);
//         console.log("Score: " + score + "/ " + rounds);
//         console.log("_______________________");
//         console.log(" ");
//     }
// }

// //Controls the UI
// function UIController(target1, target2) {
//     const scoreUI = document.querySelector(".score");
//     const resultUI = document.querySelector(".results");
//     const oppPic = document.querySelector(".oppHand");
//     const myPic = document.querySelector(".myHand");


//     //update the score UI
//     function updateScoreUI() {
//         scoreUI.innerHTML = `${score} | ${rounds}`;
//     }

//     //Update the results(win/lose/tie) UI
//     function updateResult() {
//         resultUI.innerHTML = results;
//     }

//     //Update your picture
//     function updateMyPic(target1) {
//         if (target1 === "rock") {
//             myPic.src = "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
//             myPic.alt = "rock";
//         } else if (target1 === "paper") {
//             myPic.src = "https://images.pexels.com/photos/388898/pexels-photo-388898.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
//             myPic.alt = "paper";
//         } else {
//             myPic.src = "https://images.pexels.com/photos/271402/pexels-photo-271402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
//             myPic.alt = "scissors";
//         }
//     }

//     //Udate the opponents picture
//     function updateOpponentPic(target2) {
//         if (target2 === "rock") {
//             oppPic.src = "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
//             oppPic.alt = "rock";
//         } else if (target2 === "paper") {
//             oppPic.src = "https://images.pexels.com/photos/388898/pexels-photo-388898.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
//             oppPic.alt = "paper";
//         } else {
//             oppPic.src = "https://images.pexels.com/photos/271402/pexels-photo-271402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
//             oppPic.alt = "scissors";
//         }
//     }
//     //Reset the UI
//     function uiReset(target1) {
//         if (target1 === "reset") {
//             results = "New Game";
//             scoreUI.innerHTML = "0 | 0";
//             resultUI.innerHTML = results; 
//         }
//     }
//     updateMyPic(target1);
//     updateOpponentPic(target2);
//     uiReset(target1);
//     updateResult();
//     updateScoreUI();
// }

// //Controls the entire game
// function gameController() {
//     logicController();
//     UIController();
// }

// gameController();
