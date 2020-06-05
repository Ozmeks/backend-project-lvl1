import launchGame from '../index.js';
import generateNum from '../generate.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => {
  const num = generateNum(1, 100);
  const answer = isPrime(num) ? 'yes' : 'no';
  const question = num.toString();
  return [question, answer];
};

export default () => launchGame(description, generateQuestion);
