import { startGame, randNumber } from '../index.js';

function isPrime(number) {
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i < sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function generateTask() {
  const number = randNumber(1, 30);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer]; // условие, правильный ответ
}

function startPrimeGame() {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameDescription, generateTask);
}

export default startPrimeGame;
