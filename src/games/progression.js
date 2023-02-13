import { startGame, randNumber } from '../index.js';

function generateTask() {
  const progrLength = randNumber(5, 10);
  const progrInit = randNumber(0, 50);
  const progrStep = randNumber(1, 6);
  const progrIdHidden = randNumber(0, progrLength);
  const progr = [];

  for (let i = 0; i < progrLength; i += 1) {
    progr[i] = i === progrIdHidden ? '..' : i * progrStep + progrInit;
  }

  const correctAnswer = progr[progrIdHidden];

  const condition = progr.join(' ');

  return [condition, correctAnswer.toString()]; // условие, правильный ответ
}

function startProgressionGame() {
  const gameDescription = 'What number is missing in the progression?';
  startGame(gameDescription, generateTask);
}

export default startProgressionGame;
