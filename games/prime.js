import * as msg from '../src/cli.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export default () => {
  const num = Math.ceil(Math.random() * 100);
  msg.getQuestion(num);

  const answer = msg.getAnswer();
  const res = isPrime(num) ? 'yes' : 'no';
  if (answer === res) {
    return true;
  }
  msg.getError(answer, res);
  return false;
};
