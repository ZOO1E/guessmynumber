"use strict";
/*
//71.DOM : document object model
console.log(document.querySelector(".message").textContent);
//72 Selecting and manipulating elements

displaymessage("Correct Number!");;

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
let highscore = 0 ;

const displaymessage = function(message){
  document.querySelector(".message").textContent = message ;
}
const displayNumebr = function (secretNumber){
  document.querySelector('.number').textContent = secretNumber;
} 
const displayScore = function(scores){
  document.querySelector('.score').textContent= scores;
} // 개꿀!!!

document.querySelector(".check").addEventListener("click", function() {
  //이 함수는 click이 일어났을때
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

//when there is no input
  if (!guess) {
  displaymessage('No Number!!')
  
  //when player wins
  } else if (guess ===secretNumber){
   displayNumebr ( secretNumber);
    displaymessage("Correct Number!");
 document. querySelector('body').style.backgroundColor = '#60b347';
displayNumebr( '30rem');
 if(score > highscore){
   highscore = score ;
   document.querySelector('.highscore').textContent = highscore;
 }
}

 //when guess is wrong
 else if (guess !== secretNumber){
  if(score>1){
    //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!':'Too Low!';
    displaymessage(guess > secretNumber ? 'Too high!':'Too Low!')
    score--;
   displayScore(score);
  }else{
    displaymessage('you lost the game!');
    displayScore(0);

  }
 }
}
);


  //when guess is too high
// }else if (guess > secretNumber){
//     if(score>1){
//       document.querySelector('.message').textContent ='Too high!'
//       score--;
//       displayScore(score);
//     }else{
//       displaymessage('you lost the game!');
//       displayScore(0);

//     }
//   //when guess is too low
//   }else if (guess < secretNumber){
//     if(score>1){ //score>0 으로 하면 너무 늦음 score가 이미 0이 되고 그다음에 실행해야 you lost-가 나옴 
//       document.querySelector('.message').textContent ='Too low!'
//       score--;
//       displayScore(score);
//     }else{
//       displaymessage('you lost the game!');
//       displayScore(0);

//     }
//   }
//   //displaymessage("Correct Number!");;
// });




document.querySelector('.again').addEventListener("click" , function(){
  secretNumber = Math.trunc(Math.random() * 20)+1;
   score = 20 ;
   document. querySelector('body').style.backgroundColor = '#222';
   displayNumebr( '15rem');
   displayScore( score);
   displaymessage('Start guessing...');
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value ='';
   document.querySelector('.highscore').textContent = highscore;
   
   
   if (!guess) {
    displaymessage( "No number!");
  
  //when player wins
  } else if (guess ===secretNumber){
    document.querySelector('.number').textContent = secretNumber;
    displaymessage("Correct Number!");
 document. querySelector('body').style.backgroundColor = '#60b347';
 displayNumebr( '30rem');
  //when guess is too high
}else if (guess > secretNumber){
    if(score>1){
     displaymessage('Too high!');
      score--;
      displayScore(score);
    }else{
      displaymessage('you lost the game!');
      displayScore(0);

    }
  //when guess is too low
  }else if (guess < secretNumber){
    if(score>1){ //score>0 으로 하면 너무 늦음 score가 이미 0이 되고 그다음에 실행해야 you lost-가 나옴 
     displaymessage('Too low!');
      score--;
      displayScore(score);
    }else{
      displaymessage('you lost the game!');
      displayScore(0);

    }
  }
});
  
