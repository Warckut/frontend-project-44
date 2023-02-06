#!/usr/bin/env node

import GreetUser from '../src/cli.js';

import { AskQuestion, CheckQuestion } from '../src/common.js';

let countCorrectAnswers = 0;

const username = GreetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (countCorrectAnswers < 3) {
  const randomNumber = Math.round(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = AskQuestion(randomNumber);
  countCorrectAnswers += CheckQuestion(userAnswer, correctAnswer) ? 1 : 0;
}

console.log(`Congratulations, ${username}`);
