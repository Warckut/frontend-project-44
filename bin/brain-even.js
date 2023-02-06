#!/usr/bin/env node

import readlineSync from 'readline-sync';

let countCorrectAnswers = 0;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (countCorrectAnswers < 3) {
  const randomNumber = Math.round(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    countCorrectAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log("Let's try again, Bill!");
  }
}

console.log(`Congratulations, ${name}`);
