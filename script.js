'use strict';
//DOM Elements

const numInput = document.querySelector('.guess');
const highScoreLabel = document.querySelector('.highscore');
const scoreLabel = document.querySelector('.score');
const messageEl = document.querySelector('.message');
const numDisplay = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const resetHighscoreBtn = document.querySelector('.reset-highscore');


//Initial Conditions
const randValue = Math.floor((Math.random()*20) + 1);
let playing = 1;
let score = 20;
let highScore = 0;


//Event Listeners
checkButton.addEventListener('click',function(){

  //If the user has not yet guessed the right number
  if(playing){
    //If the user has entered any number in the input box
    if(numInput.value){
      let inputValue = parseInt(numInput.value);
      checkWriteGuess(inputValue);
    }else{
      window.alert('Please enter a number between 1 and 20 (inclusive) !!');
    }
  }
})

againButton.addEventListener('click',function(){
  
  //Reset score
  score = 0;
  scoreLabel.textContent = 0;

  //Reset message text
  messageEl.textContent = 'Start Guessing.....';

  //Change background color
  document.body.style.backgroundColor = '#222';

  //Change number display to ?
  numDisplay.textContent = '?';

  //Reset input value
  numInput.value = '';

  //Reset playing variable
  playing = 1;

  //Reset score
  score = 20;
  scoreLabel.textContent = 20;
})

resetHighscoreBtn.addEventListener('click',function(){
  highScore = 0;
  highScoreLabel.textContent = highScore;  
})

const checkWriteGuess = (val) => {
  if(val === randValue){

    //If guessed number is correct
    messageEl.textContent = 'Correct Number';
    document.body.style.backgroundColor = '#60b347';
    numDisplay.textContent = val;
    playing = 0;

    if(score > highScore){
      highScore = score;
      highScoreLabel.textContent = highScore;
    }


  }else if(val < randValue){

    //If guessed number is less then display message and decrement score by 1
    messageEl.textContent = 'Too Low !!!';
    score--;
    checkOneScore();
    scoreLabel.textContent = score;
  }else{

    //If guessed number is more then display message and decrement score by 1
    messageEl.textContent = 'Too High !!!';
    score--;
    checkOneScore();
    scoreLabel.textContent = score;
  }
}

//When the user's score reaches 1
const checkOneScore = () => {
  if(score == 1){
    document.body.style.backgroundColor = 'tomato';
    playing = 0;
    messageEl.textContent = 'Sorry no more guesses !!!';
  }
}