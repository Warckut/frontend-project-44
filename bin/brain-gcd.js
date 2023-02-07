#!/usr/bin/env node

import GreetUser from '../src/cli.js';

import { AskQuestion, CheckQuestion, getRandNumber } from '../src/common.js';

let countCorrectAnswers = 0;

const username = GreetUser();

console.log('Find the greatest common divisor of given numbers.');

while (countCorrectAnswers < 3) {
  const firstTerm = getRandNumber(0, 100);
  const secondTerm = getRandNumber(0, 100);

  let maxDivider = Math.min(firstTerm, secondTerm);
  while ((firstTerm % maxDivider !== 0 || secondTerm % maxDivider !== 0)) {
    maxDivider -= 1;
  }

  const userAnswer = Number(AskQuestion(`${firstTerm} ${secondTerm}`));
  countCorrectAnswers += CheckQuestion(userAnswer, maxDivider) ? 1 : 0;
}

console.log(`Congratulations, ${username}`);
