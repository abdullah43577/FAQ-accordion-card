"use strict";

const icons = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answers");
const questions = document.querySelectorAll(".questions h3");

icons.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    //rotate icon
    icon.classList.toggle("rotate-icons");

    //toggle answers switch
    answers[i].classList.toggle("hidden");
    //toggle colors of the the elements
    questions[i].classList.toggle("color");
  });
});
