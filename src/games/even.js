import { startGame, randNumber } from '../index.js';

function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function generateTask() {
  const randomNumber = randNumber(0, 100);
  const correctAnswer = isEven(randomNumber);
  return [randomNumber, correctAnswer]; // условие, правильный ответ
}

function startEvenGame() {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameDescription, generateTask);
}

export default startEvenGame;
