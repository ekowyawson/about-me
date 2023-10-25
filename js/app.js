"use strict";
/* [*] Create an About Me guessing game that utilizes HTML, CSS, & JavaScript. */

const cl = (input) => { console.log(input) };

/* [*] Ask the user their name through a prompt() */
let getName = prompt(`Hello friend! What is thy name?`);

/* [*] Display that name back to the user through a custom greeting welcoming them to your site. */
alert(`Welcome ${getName}! \nLet's play a quick guessing game to see how much you know about me.\nAnswer "y" for yes or "n" for no for each question.`);

// Question Number Incrementor
let n = 0;

/* [*] Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated. Be sure to let the user know if they answered the question correctly by alerting them with a response. */

/* [*] Add console.log() messages within your app to notify the user if they are correct. */
// Question 1 ====================================================/
let question1 = prompt(`Is my favorite food lobster and shrimp? [y|n]`);

switch (question1.toLowerCase()) {
  case "y":
  case "ye":
  case "yes":
    n++
    // cl("Correct. My favorite food is lobster and shrimp.");
    alert("Correct. My favorite food is lobster and shrimp.");
    break;
  case "n":
  case "no":
  case "nope":
    // cl("Wrong. My favorite food is lobster and shrimp.");
    alert("Wrong. My favorite food is lobster and shrimp.");
    break;
  default:
    cl("You did not answer question 1.");
}

// Question 2 ====================================================/
let question2 = prompt(`Am I 28 years old? [y|n]`);

switch (question2.toLowerCase()) {
  case "y":
  case "ye":
  case "yes":
    // cl("Wrong. My age is not 28.");
    alert("Wrong. My age is not 28.");
    break;
  case "n":
  case "no":
  case "nope":
    n++
    // cl("Correct. I am not 28 years old.");
    alert("Correct. I am not 28 years old.");
    break;
  default:
    cl("You did not answer question 2.");
}

// Question 3 ====================================================/
let question3 = prompt(`Is my height exactly 6ft? [y|n]`);

switch (question3.toLowerCase()) {
  case "y":
  case "ye":
  case "yes":
    n++
    // cl("Correct. My height is exactly 6ft.");
    alert("Correct. My height is exactly 6ft.");
    break;
  case "n":
  case "no":
  case "nope":
    // cl("Wrong. My height is exactly 6ft.");
    alert("Wrong. My height is exactly 6ft.");
    break;
  default:
    cl("You did not answer question 3.");
}

// Question 4 ====================================================/
let question4 = prompt(`Do I have any pets? [y|n]`);

switch (question4.toLowerCase()) {
  case "y":
  case "ye":
  case "yes":
    // cl("False. I do not have any pets.");
    alert("False. I do not have any pets.");
    break;
  case "n":
  case "no":
  case "nope":
    n++
    // cl("Correct. I do not have any pets.");
    alert("Correct. I do not have any pets.");
    break;
  default:
    cl("You did not answer question 4.");
}

// Question 5 ====================================================/
let question5 = prompt(`Did I jump out of perfectly good aircraft while in the Army? [y|n]`);

switch (question5.toLowerCase()) {
  case "y":
  case "ye":
  case "yes":
    n++
    // cl("Correct. My scared azz jumped out of perfectly working aircraft while in the army.");
    alert("Correct. My scared azz jumped out of perfectly working aircraft while in the army.");
    break;
  case "n":
  case "no":
  case "nope":
    // cl("Incorrect. I did jump out of aircraft while in the army and hit the ground hard as crap every time.");
    alert("Incorrect. I did jump out of aircraft while in the army and hit the ground hard as crap every time.");
    break;
  default:
    cl("You did not answer question 5.");
}

/* [*] Display the user’s name back to them in your final message to the user. */
alert(`${getName} you answered ${n} out of 5 questions correct!`);
// cl(`You answered ${n} out of 5 questions correct!`);