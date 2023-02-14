import { getRandSequence, randNumber } from '../generationRandNumbers.js';
import startGame from '../index.js';

function generateTask() {
  const length = randNumber(5, 10);
  const step = randNumber(1, 6);
  const indexHidden = randNumber(0, length);
  const progr = getRandSequence(step, length);

  const correctAnswer = progr[indexHidden];
  progr[indexHidden] = '..';

  const condition = progr.join(' ');

  return [condition, correctAnswer.toString()]; // условие, правильный ответ
}

function startProgressionGame() {
  const gameDescription = 'What number is missing in the progression?';
  startGame(gameDescription, generateTask);
}

export default startProgressionGame;
