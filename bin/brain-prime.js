#!/usr/bin/env node

import GreetUser from '../src/cli.js';

import { AskQuestion, CheckQuestion, getRandNumber } from '../src/common.js';

let countCorrectAnswers = 0;

const username = GreetUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

while (countCorrectAnswers < 3) {
  const number = getRandNumber(0, 30);
  let result = number > 1 ? 'yes' : 'no';

  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    }
  }

  const userAnswer = AskQuestion(number);
  countCorrectAnswers += CheckQuestion(userAnswer, result) ? 1 : 0;
}

console.log(`Congratulations, ${username}`);
