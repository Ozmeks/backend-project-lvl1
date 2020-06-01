import readlineSync from 'readline-sync';

export const generateNum = (size) => Math.ceil(Math.random() * size);

export const launchGame = (textRules, playGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(textRules);

  let successCnt = 0;
  while (successCnt < 3) {
    const { task, result } = playGame();
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');

    if (result !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    successCnt += 1;
  }

  return console.log(`Congratulations, ${name}!`);
};
