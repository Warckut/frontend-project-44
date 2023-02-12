import readlineSync from 'readline-sync';

function Core(gameDescription, generateTask) {
  let countCorrectAnswers = 0; // начальное кол-во правильных ответов

  console.log('Welcome to the Brain Games!'); // приветствие

  const username = readlineSync.question('May I have your name? '); // получаем имя user
  console.log(`Hello, ${username}`);

  console.log(gameDescription); // описание задачи

  while (countCorrectAnswers < 3) {
    const [condition, correctAnswer] = generateTask(); // генерация задачи

    console.log(`Question: ${condition}`);
    const userAnswer = readlineSync.question('Your answer: '); // получаем ответ user

    if (correctAnswer.toString() === userAnswer) { // проверка
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${username}!`);
    }
  }

  console.log(`Congratulations, ${username}`);
}

export default Core;
