import startGame from '../index.js';
import { randNumber } from '../generationRandNumbers.js';

function FindDivider(a, b) {
  if (b === 0) return a;
  const r = a % b;
  return FindDivider(b, r);
}

function generateTask() {
  const a = randNumber(0, 100);
  const b = randNumber(0, 100);
  const condition = `${a} ${b}`;

  const maxDivider = FindDivider(...[a, b].sort((i, j) => j - i)).toString();

  return [condition, maxDivider]; // условие, правильный ответ
}

function startGCDGame() {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(gameDescription, generateTask);
}

export default startGCDGame;
