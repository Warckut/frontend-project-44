import Core from '../index.js';

function generateTask() {
  const firstTerm = Math.floor(Math.random() * 100);
  const secondTerm = Math.floor(Math.random() * 100);
  const condition = `${firstTerm} ${secondTerm}`;

  let maxDivider = Math.min(firstTerm, secondTerm);
  while ((firstTerm % maxDivider !== 0 || secondTerm % maxDivider !== 0)) {
    maxDivider -= 1;
  }

  return [condition, maxDivider]; // условие, правильный ответ
}

function startGCDGame() {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  Core(gameDescription, generateTask);
}

export default startGCDGame;
