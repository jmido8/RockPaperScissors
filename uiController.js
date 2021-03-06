import { scoreUI, resultUI, oppPic, myPic } from "./domStrings.js";
import { varObject as vars } from "./gameVariables.js";



//update the score UI
export function updateScoreUI() {
    scoreUI.innerHTML = `${vars.score} | ${vars.rounds}`;
}

//Update the results(win/lose/tie) UI
export function updateResult() {
    resultUI.innerHTML = vars.results;
}

//Update your picture
export function updateMyPic(target) {
    if (target === "rock") {
        myPic.src = vars.rockPic;
        myPic.alt = "rock";
    } else if (target === "paper") {
        myPic.src = vars.paperPic;
        myPic.alt = "paper";
    } else {
        myPic.src = vars.scissorsPic;
        myPic.alt = "scissors";
    }
}

//Udate the opponents picture
export function updateOpponentPic(target) {
    if (target === "rock") {
        oppPic.src = vars.rockPic;
        oppPic.alt = "rock";
    } else if (target === "paper") {
        oppPic.src = vars.paperPic;
        oppPic.alt = "paper";
    } else {
        oppPic.src = vars.scissorsPic;
        oppPic.alt = "scissors";
    }
}

//Reset the UI
export function uiReset(target) {
    if (target === "reset") {
        vars.results = "New Game";
        scoreUI.innerHTML = "0 | 0";
        resultUI.innerHTML = vars.results; 
        changeResultColor();
    }
}
    
//Toggle results color green
export function changeResultColor() {
    if (vars.results === "Win") {
        resultUI.classList.remove("resultsLose");
        resultUI.classList.add("resultsWin");
    } else if (vars.results === "Lose") {
        resultUI.classList.remove("resultsWin");
        resultUI.classList.add("resultsLose");
    } else if (vars.results === "Tie" || vars.results === "New Game") {
        resultUI.classList.remove("resultsWin");
        resultUI.classList.remove("resultsLose");
    }
}