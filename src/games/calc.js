import { startGame, randNumber } from '../index.js';

function solveTask(numberOperation, firstTerm, secondTerm) {
  switch (numberOperation) {
    case 0:
      return firstTerm + secondTerm;
    case 1:
      return firstTerm - secondTerm;
    case 2:
      return firstTerm * secondTerm;
    default:
      return null;
  }
}

function generateTask() {
  const firstTerm = randNumber(1, 10);
  const secondTerm = randNumber(1, 10);
  const randNumberOp = randNumber(0, 100) % 3;

  const sign = ['+', '-', '*'][randNumberOp];
  const expression = `${firstTerm} ${sign} ${secondTerm}`;
  const correctAnswer = solveTask(randNumberOp, firstTerm, secondTerm);

  return [expression, correctAnswer.toString()]; // условие, правильный ответ
}

function startCalcGame() {
  const gameDescription = 'What is the result of the expression?';
  startGame(gameDescription, generateTask);
}

export default startCalcGame;
