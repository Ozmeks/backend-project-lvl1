import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getQuestion = (task) => console.log(`Question: ${task}`);
export const getAnswer = () => readlineSync.question('Your answer: ');
export const getError = (answer, res) => console.log(`"${answer}" is wrong answer ;(. Correct answer was "${res}".`); 
