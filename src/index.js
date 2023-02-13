import readlineSync from 'readline-sync';

function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function startGame(gameDescription, generateTask) {
  let countCorrectAnswers = 0; // начальное кол-во правильных ответов
  const maxCountRounds = 3;
  console.log('Welcome to the Brain Games!'); // приветствие

  const username = readlineSync.question('May I have your name? '); // получаем имя user
  console.log(`Hello, ${username}!`);

  console.log(gameDescription); // описание задачи

  while (countCorrectAnswers < maxCountRounds) {
    const [condition, correctAnswer] = generateTask(); // генерация задачи

    console.log(`Question: ${condition}`);
    const userAnswer = readlineSync.question('Your answer: '); // получаем ответ user

    if (correctAnswer === userAnswer) { // проверка
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }

  if (countCorrectAnswers === maxCountRounds) {
    console.log(`Congratulations, ${username}!`);
  }
}

export { startGame, randNumber };
