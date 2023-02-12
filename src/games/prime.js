import Core from '../index.js';

function generateTask() {
  const number = Math.floor(Math.random() * 30 + 1);
  let correctAnswer = 'yes';
  if (number <= 1) {
    return [number, 'no'];
  }

  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }

  return [number, correctAnswer]; // условие, правильный ответ
}

function startPrimeGame() {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  Core(gameDescription, generateTask);
}

export default startPrimeGame;
