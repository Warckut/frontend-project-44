import startGame from '../index.js';
import { randNumber } from '../generationRandNumbers.js';

function solveTask(operation, firstTerm, secondTerm) {
  switch (operation) {
    case '+':
      return firstTerm + secondTerm;
    case '-':
      return firstTerm - secondTerm;
    case '*':
      return firstTerm * secondTerm;
    default:
      return null;
  }
}

function generateTask() {
  const firstTerm = randNumber(1, 10);
  const secondTerm = randNumber(1, 10);
  const randOeration = ['+', '-', '*'][randNumber(0, 100) % 3];

  const expression = `${firstTerm} ${randOeration} ${secondTerm}`;
  const correctAnswer = solveTask(randOeration, firstTerm, secondTerm).toString();

  return [expression, correctAnswer]; // условие, правильный ответ
}

function startCalcGame() {
  const gameDescription = 'What is the result of the expression?';
  startGame(gameDescription, generateTask);
}

export default startCalcGame;
