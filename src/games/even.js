import Core from '../index.js';

function generateTask() {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, correctAnswer]; // условие, правильный ответ
}

function startEvenGame() {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  Core(gameDescription, generateTask);
}

export default startEvenGame;
