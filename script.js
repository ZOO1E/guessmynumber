"use strict";
/*
//71.DOM : document object model
console.log(document.querySelector(".message").textContent);
//72 Selecting and manipulating elements

document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
//73.Handling click events

const x = function() {
  console.log(23);
};*/

let secretNumber = Math.trunc(Math.random() * 20)+1; //decimal part는 잘라버림
let score =20;


document.querySelector(".check").addEventListener("click", function() {
  //이 함수는 click이 일어났을때
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

//when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  
  //when player wins
  } else if (guess ===secretNumber){
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number!"
 document. querySelector('body').style.backgroundColor = '#60b347';
 document.querySelector('.number').style.width = '30rem';
  //when guess is too high
}else if (guess > secretNumber){
    if(score>1){
      document.querySelector('.message').textContent ='Too high!'
      score--;
      document.querySelector('.score').textContent= score;
    }else{
      document.querySelector('.message').textContent ='you lost the game'
      document.querySelector('.score').textContent =0;

    }
  //when guess is too low
  }else if (guess < secretNumber){
    if(score>1){ //score>0 으로 하면 너무 늦음 score가 이미 0이 되고 그다음에 실행해야 you lost-가 나옴 
      document.querySelector('.message').textContent ='Too low!'
      score--;
      document.querySelector('.score').textContent= score;
    }else{
      document.querySelector('.message').textContent ='you lost the game'
      document.querySelector('.score').textContent =0;

    }
  }
  //document.querySelector(".message").textContent = "Correct Number!";
});
document.querySelector('.again').addEventListener("click" , function(){
  secretNumber = Math.trunc(Math.random() * 20)+1;
   score = 20 ;
   document. querySelector('body').style.backgroundColor = '#222',document.querySelector('.number').style.width = '15rem',

});
