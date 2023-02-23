import randNumber from '../utils.js';
import startGame from '../index.js';

function getRandSequence(step, n) {
  const progrInit = randNumber(0, 50);
  const progr = [];

  for (let i = 0; i < n; i += 1) {
    progr[i] = i * step + progrInit;
  }

  return progr;
}

function generateTask() {
  const length = randNumber(5, 10);
  const step = randNumber(1, 6);
  const indexHidden = randNumber(0, length);
  const progr = getRandSequence(step, length);

  const correctAnswer = progr[indexHidden].toString();
  progr[indexHidden] = '..';

  const condition = progr.join(' ');

  return [condition, correctAnswer]; // условие, правильный ответ
}

function startProgressionGame() {
  const gameDescription = 'What number is missing in the progression?';
  startGame(gameDescription, generateTask);
}

export default startProgressionGame;
