import * as msg from './cli.js';

export default (func, textRules) => {
  const name = msg.greetUser();
  console.log(textRules);

  let successCnt = 0;
  while (successCnt < 3) {
    if (!func()) {
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    successCnt += 1;
  }

  return console.log(`Congratulations, ${name}!`);
};
