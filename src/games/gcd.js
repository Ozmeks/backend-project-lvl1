import launchGame from '../index.js';
import generateNum from '../generate.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const rules = 'Find the greatest common divisor of given numbers.';

const playGcd = () => {
  const num1 = generateNum(100);
  const num2 = generateNum(100);
  return {
    task: `${num1} ${num2}`,
    result: getGcd(num1, num2).toString(),
  };
};

export default () => launchGame(rules, playGcd);
