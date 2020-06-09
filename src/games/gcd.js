import launchGame from '../index.js';
import generateNum from '../generate.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const num1 = generateNum(1, 100);
  const num2 = generateNum(1, 100);
  const answer = getGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return [question, answer];
};

export default () => launchGame(description, generateGameData);
