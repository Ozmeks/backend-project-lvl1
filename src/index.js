import readlineSync from 'readline-sync';

export default (description, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const maxSuccessCnt = 3;
  let successCnt = 0;
  while (successCnt < maxSuccessCnt) {
    const [question, answer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
    console.log('Correct!');
    successCnt += 1;
  }

  console.log(`Congratulations, ${name}!`);
  return 1;
};
