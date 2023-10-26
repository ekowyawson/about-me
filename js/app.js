//lana's comment for class 04

"use strict";
const cl = (input) => { console.log(input) };
/* [*] Create an About Me guessing game that utilizes HTML, CSS, & JavaScript. */
/* [*] Ask the user their name through a prompt() */
const getName = prompt(`Hello friend! What is thy name?`);

/*
[*] Display that name back to the user through a custom greeting
welcoming them to your site.
*/
alert(`Welcome ${getName}! \nLet's play a quick guessing game \
to see how much you know about me.\nAnswer "y" for yes or "n" \
for no for each question.`);

// Question Number Incrementor
let n = 0;

/*
[*] Prompt the user a total of exactly five yes or no questions.
    The user input for the answer must accept either y/n or yes/no
    responses while taking into consideration case sensitivity by
    normalizing the user input so that it can be validated. Be sure
    to let the user know if they answered the question correctly by
    alerting them with a response.
*/

/* [*] Add console.log() messages within your app to notify the user if they are correct. */
// Question 1 ====================================================/
const question1 = prompt(`Is my favorite food lobster and shrimp? [y|n]`);

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
const question2 = prompt(`Am I 28 years old? [y|n]`);

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
const question3 = prompt(`Is my height exactly 6ft? [y|n]`);

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
const question4 = prompt(`Do I have any pets? [y|n]`);

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
const question5 = prompt(`Did I jump out of perfectly good aircraft while in the Army? [y|n]`);

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
    // cl("Incorrect");
    alert("Incorrect. I did jump out of aircraft while in the army and hit the ground hard as crap every time.");
    break;
  default:
    cl("You did not answer question 5.");
}

// Question 6 ====================================================/
/*
[] Add a 6th question to the guessing game that takes in a numeric
    input by prompting the user to guess a number.
*/
const question6 = () => {
  return prompt(`Guess the number of push-ups I can do in one minute:`);
}

function checkNumber() {
  let askQuestion = question6();
  let chances = 1;

  while(isNaN(askQuestion)) {
    if (chances > 4) {
      break;
    }
    alert(`${askQuestion} is not a number. Try again\n[Attempt ${chances} of 4]`);
    chances++
    askQuestion = question6();
  }

  while(askQuestion != 70) {
    if (chances > 4) {
      break;
    }
    switch (true) {
      case (askQuestion > 70):
        alert(`${askQuestion} is too high. Try again\n[Attempt ${chances} of 4]`);
        break;
      case (askQuestion < 70):
        alert(`${askQuestion} is too low. Try again\n[Attempt ${chances} of 4]`);
        break;
    }
    chances++
    askQuestion = question6();
  }

  if(chances >= 5) {
    alert(`SORRY! You have run out of chances. The answer is 70`);
  } else {
    alert(`BINGO! ${askQuestion} is correct!`);
  }
}

// Question 7 ====================================================/
/*
[] Add a 6th question to the guessing game that takes in a numeric
    input by prompting the user to guess a number.
*/
const question7 = () => {
  return prompt(`Name one of Jupiter's four largest moons:`);
}

const possibleAnswers = ['io', 'europa', 'ganymede', 'callisto'];

function checkAnswer() {
  let getAnswer = question7();

  for (let i = 1; i <= 7; i++) {
    if(i == 7) {
      alert(`You have exhausted the number of guesses allowed (7)`);
      alert(`The possible answer are ${possibleAnswers}`);
      break;
    }

    if (possibleAnswers.includes(getAnswer.toLowerCase())) {
      alert(`BINGO! ${getAnswer} is correct!`);
      break;
    } else {
      alert(`Sorry ${getAnswer} is incorrect. Try again.`);
      getAnswer = question7();
    }
  }
}

// /* [*] Display the user’s name back to them in your final message to the user. */
alert(`${getName} you answered ${n} out of 5 questions correct!`);
// // cl(`You answered ${n} out of 5 questions correct!`);

checkNumber();
checkAnswer();
