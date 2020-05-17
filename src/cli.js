import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');

  return readlineSync.question('May I have your name? ');
};

export const askUser = () => readlineSync.question('Your answer: ');
