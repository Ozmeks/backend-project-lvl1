import readlineSync from 'readline-sync';

export default (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const maxSuccessCnt = 3;
  let successCnt = 0;
  while (successCnt < maxSuccessCnt) {
    const [question, answer] = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    successCnt += 1;
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};
