import { startGame, randNumber } from '../index.js';

function solveTask(firstTerm, secondTerm) {
  let a = firstTerm;
  let b = secondTerm;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
}

function generateTask() {
  const firstTerm = randNumber(0, 100);
  const secondTerm = randNumber(0, 100);
  const condition = `${firstTerm} ${secondTerm}`;

  const maxDivider = solveTask(firstTerm, secondTerm).toString();

  return [condition, maxDivider]; // условие, правильный ответ
}

function startGCDGame() {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(gameDescription, generateTask);
}

export default startGCDGame;
