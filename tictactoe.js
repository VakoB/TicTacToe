
let scoreX = 0;
let scoreO = 0;

GAME_STATE = 1; // 1 being started, 0 being over.

X = document.getElementById("x");
O = document.getElementById("o");

X.textContent = "0";
O.textContent = "0";
buttonState()
function buttonState(){
    for (i of document.querySelectorAll(".box .row > button")){
        i.textContent = "";
        i.style.backgroundColor = "white";
    }
}

let current_player = 0; //0 being x, 1 being o
function btnClicked(button){
    
    if (button.style.backgroundColor != "white"){
        return;
    }
    if (current_player === 0){
        button.style.backgroundColor = "red";
        current_player++;
    }
    else if(current_player === 1){
        button.style.backgroundColor = "green";
        current_player--;
    }
    scoreCounter();

}

function scoreCounter(){

    if (gameResult() == 1){
        scoreO++;
        O.textContent = scoreO.toString();
        resetGame();
        return;
    }
    else if (gameResult() == 0){
        scoreX++;
        X.textContent = scoreX.toString();
        resetGame();
        return;
    }
    else if (gameResult() == -1){
        resetGame();
        return
    }
}
function resetGame(){
    buttons = document.getElementsByClassName("btn");
    for (i of buttons){
        i.disabled = true;
    }
    setTimeout(() => {
        for (i of buttons){
            i.style.backgroundColor = "white";
        }
    }, 500);
    setTimeout(() => {
        for (i of buttons){
            i.disabled = false;
        }
    }, 500);
    current_player = 0;
    /* 
    ...
    */
}

function gameResult(){
    const buttons = document.getElementsByClassName("btn");
    const btn1 = buttons[0];
    const btn2 = buttons[1];
    const btn3 = buttons[2];
    const btn4 = buttons[3];
    const btn5 = buttons[4];
    const btn6 = buttons[5];
    const btn7 = buttons[6];
    const btn8 = buttons[7];
    const btn9 = buttons[8];
    if (isRed(btn1) && isRed(btn2) && isRed(btn3)){
        return 0; //0 being x, 1 being o, -1 being tie
    }
    else if (isGreen(btn1) && isGreen(btn2) && isGreen(btn3)){
        return 1;
    }
    if (isRed(btn4) && isRed(btn5) && isRed(btn6)){
        return 0;
    }
    else if (isGreen(btn4) && isGreen(btn5) && isGreen(btn6)){
        return 1;
    }
    if (isRed(btn7) && isRed(btn8) && isRed(btn9)){
        return 0;
    }
    else if (isGreen(btn7) && isGreen(btn8) && isGreen(btn9)){
        return 1;
    }



    if (isRed(btn1) && isRed(btn4) && isRed(btn7)){
        return 0;
    }
    else if (isGreen(btn1) && isGreen(btn4) && isGreen(btn7)){
        return 1;
    }
    if (isRed(btn2) && isRed(btn5) && isRed(btn8)){
        return 0;
    }
    else if (isGreen(btn2) && isGreen(btn5) && isGreen(btn8)){
        return 1;
    }
    if (isRed(btn3) && isRed(btn6) && isRed(btn9)){
        return 0;
    }
    else if (isGreen(btn3) && isGreen(btn6) && isGreen(btn9)){
        return 1;
    }



    if (isRed(btn1) && isRed(btn5) && isRed(btn9)){
        return 0;
    }
    else if (isGreen(btn1) && isGreen(btn5) && isGreen(btn9)){
        return 1;
    }
    if (isRed(btn3) && isRed(btn5) && isRed(btn7)){
        return 0;
    }
    else if (isGreen(btn3) && isGreen(btn5) && isGreen(btn7)){
        return 1;
    }

    if (boxIsFilled()){
        return -1;
    }
    

}
function isRed(button){
    if (button.style.backgroundColor == "red"){
        return true;
    }
}
function isGreen(button){
    if (button.style.backgroundColor == "green"){
        return true;
    }
}
function boxIsFilled(){
    const buttons = document.getElementsByClassName("btn");
    for(i of buttons){
        if (i.style.backgroundColor === "white"){
            return false;
        }
    }
    return true;
}
