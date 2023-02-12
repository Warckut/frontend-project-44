import Core from '../index.js';

function generateTask() {
  const progrLength = Math.floor(Math.random() * 5 + 5);
  const progrInit = Math.floor(Math.random() * 50);
  const progrStep = Math.floor(Math.random() * 5 + 1);
  const progrIdHidden = Math.floor(Math.random() * progrLength);
  const progr = [];

  let correctAnswer;

  for (let i = 0; i < progrLength; i += 1) {
    if (i === progrIdHidden) {
      correctAnswer = i * progrStep + progrInit;
      progr.push('..');
    } else {
      progr.push(i * progrStep + progrInit);
    }
  }

  const condition = progr.join(' ');

  return [condition, correctAnswer]; // условие, правильный ответ
}

function startProgressionGame() {
  const gameDescription = 'What number is missing in the progression?';
  Core(gameDescription, generateTask);
}

export default startProgressionGame;
