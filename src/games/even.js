import startGame from '../index.js';
import { randNumber } from '../generationRandNumbers.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateTask() {
  const randomNumber = randNumber(0, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer]; // условие, правильный ответ
}

function startEvenGame() {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameDescription, generateTask);
}

export default startEvenGame;
