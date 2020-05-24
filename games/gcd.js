import * as msg from '../src/cli.js';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

export default () => {
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  msg.getQuestion(`${num1} ${num2}`);

  const answer = msg.getAnswer();
  const res = gcd(num1, num2);
  if (answer === res.toString()) {
    return true;
  }
  msg.getError(answer, res);
  return false;
};
