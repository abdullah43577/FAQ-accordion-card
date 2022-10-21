"use strict";

const icons = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answers");
const questions = document.querySelectorAll(".questions h3");

// console.log(questions);

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    //console.log("I'm being clicked");

    //rotate icon
    icons[i].classList.toggle("rotate-icons");

    //toggle answers switch
    answers[i].classList.toggle("hidden");
    //toggle colors of the the elements
    questions[i].classList.toggle("color");
  });
}
