#!/usr/bin/env node

import GreetUser from '../src/cli.js';

import { AskQuestion, CheckQuestion, getRandNumber } from '../src/common.js';

let countCorrectAnswers = 0;

const username = GreetUser();

console.log('What number is missing in the progression?');

while (countCorrectAnswers < 3) {
  const progrLength = getRandNumber(5, 10);
  const progrInit = getRandNumber(0, 50);
  const progrStep = getRandNumber(1, 5);
  const progrIdHidden = getRandNumber(0, progrLength);
  const progr = [];

  let correctAnswer;

  for (let i = 0; i < progrLength; i += 1) {
    if (i === progrIdHidden) {
      correctAnswer = i * progrStep + progrInit;
      progr.push('..');
    } else {
      progr.push(i * progrStep + progrInit);
    }
  }

  const userAnswer = Number(AskQuestion(progr.join(' ')));
  countCorrectAnswers += CheckQuestion(userAnswer, correctAnswer) ? 1 : 0;
}

console.log(`Congratulations, ${username}`);
