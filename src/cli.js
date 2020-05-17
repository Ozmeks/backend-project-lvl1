import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askUser = () => readlineSync.question('Your answer: ');
export const winGame = (name) => `Congratulations, ${name}!`;
export const loseGame = (name) => `Let's try again, ${name}!`;
export const rightAnswer = () => console.log('Correct!');
