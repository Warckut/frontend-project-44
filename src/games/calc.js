import Core from '../index.js';

function generateTask() {
  const firstTerm = Math.floor(Math.random() * 10) + 1;
  const secondTerm = Math.floor(Math.random() * 10) + 1;
  const randNumberOp = Math.floor((Math.random() * 100) % 3);

  const sign = ['+', '-', '*'][randNumberOp];
  const expression = `${firstTerm} ${sign} ${secondTerm}`;
  let correctAnswer;

  switch (randNumberOp) {
    case 0:
      correctAnswer = firstTerm + secondTerm;
      break;
    case 1:
      correctAnswer = firstTerm - secondTerm;
      break;
    case 2:
      correctAnswer = firstTerm * secondTerm;
      break;
    default:
  }

  return [expression, correctAnswer]; // условие, правильный ответ
}

function startCalcGame() {
  const gameDescription = 'What is the result of the expression?';
  Core(gameDescription, generateTask);
}

export default startCalcGame;
