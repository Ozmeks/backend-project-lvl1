#!/usr/bin/env node
import { greetUser, askUser } from '../src/cli.js';

const brainEven = () => {
  const name = greetUser();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let successCnt = 0;
  while (successCnt < 3) {
    const num = Math.round(Math.random() * 10);
    console.log(`Question: ${num}`);
    const answer = askUser();
    if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0)) {
      console.log('Correct!');
      successCnt += 1;
    } else {
      return `Let's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};

console.log(brainEven());
