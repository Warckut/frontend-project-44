#!/usr/bin/env node

import { AskQuestion, CheckQuestion, getRandNumber } from '../src/common.js';
import GreetUser from '../src/cli.js';

let countCorrectAnswers = 0;

const username = GreetUser();

console.log('What is the result of the expression?');

while (countCorrectAnswers < 3) {
  const arrOpSign = ['+', '-', '*'];
  const firstTerm = getRandNumber(1, 10);
  const secondTerm = getRandNumber(1, 10);
  const randNumberOp = Math.floor((Math.random() * 100) % 3);
  const expression = [firstTerm, secondTerm].join(` ${arrOpSign[randNumberOp]} `);

  let correctAnswer;

  switch (randNumberOp) {
    case 0:
      correctAnswer = firstTerm + secondTerm;
      break;
    case 1:
      correctAnswer = firstTerm - secondTerm;
      break;
    case 2:
      correctAnswer = firstTerm * secondTerm;
      break;
    default:
  }

  const userAnswer = Number(AskQuestion(expression));
  countCorrectAnswers += CheckQuestion(userAnswer, correctAnswer) ? 1 : 0;
}

console.log(`Congratulations, ${username}`);
