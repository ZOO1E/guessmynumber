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
*/
const x = function() {
  console.log(23);
};

document.querySelector(".check").addEventListener("click", function() {
  //이 함수는 click이 일어났을때
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else {
    document.querySelector(".message").textContent = "waiting please!";
  }
  //document.querySelector(".message").textContent = "Correct Number!";
});
