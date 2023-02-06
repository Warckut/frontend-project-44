import readlineSync from 'readline-sync';

function AskQuestion(quest) {
  console.log(`Question: ${quest}`);
  return readlineSync.question('Your answer: ');
}

function CheckQuestion(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log("Let's try again, Bill!");
  return false;
}

export { AskQuestion, CheckQuestion };
