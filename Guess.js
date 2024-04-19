let randomNumbers =  parseInt((Math.random()*100)+1 )
const USER = document.getElementById("input")
const button = document.getElementById("button")
const prev = document.getElementById("array")
const chanceRemain = document.getElementById("left")
const lowOrhigh = document.getElementById("message")
let prevGuess = []
let play = true
let numsOfAttemp = 1
if (play){
    button.addEventListener('click',function(){
        let userInput = Number(USER.value);
        checkValidation(userInput);
    })
}else{
    EndGame(userInput);
}
function checkValidation(userInput){
    if(isNaN(userInput)){
        displayMessages(`Enter a valid Number`);
    }else{
        prevGuess.push(userInput);
        if (numsOfAttemp == 6){
            displayGuess( userInput);
            displayMessages(`Random Number was ${randomNumbers}`)
            EndGame(userInput);
        }
        else{
            displayGuess(userInput);
            checkguess(userInput);
        }
    
    }

}


function checkguess(userInput){
    if(randomNumbers === userInput){
        displayMessages(`Congratulation!!!!..You guessed it right`);
    }
    else if(userInput > randomNumbers){
        displayMessages(`Number is Too high`);
    }
    else if(userInput < randomNumbers){
        displayMessages(`Number is Too low`);
    }
}

function displayGuess(userInput){
    USER.value = '';
    console.log(prevGuess)
    prev.innerHTML = prevGuess;
    numsOfAttemp++;
    chanceRemain.innerHTML = `${7 - numsOfAttemp}`;

}

function displayMessages(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function EndGame(){
    play = false
    USER.value = ''
    USER.setAttribute('disabled','')
    button.setAttribute('disabled','')
    lowOrhigh.classList.add('button').addEventListener('click',NewGame(userInput))
}
function NewGame(){
    prevGuess = []
    numsOfAttemp = 1
    play = true
}