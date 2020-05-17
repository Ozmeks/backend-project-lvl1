#!/usr/bin/env node
import * as msg from '../src/cli.js';

const brainEven = () => {
  const name = msg.greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let successCnt = 0;
  while (successCnt < 3) {
    const num = Math.ceil(Math.random() * 10);
    console.log(`Question: ${num}`);
    const answer = msg.askUser();
    if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0)) {
      msg.rightAnswer();
      successCnt += 1;
    } else {
      return msg.loseGame(name);
    }
  }

  return msg.winGame(name);
};

console.log(brainEven());
