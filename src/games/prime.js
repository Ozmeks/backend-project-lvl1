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

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrime = () => {
  const num = generateNum(100);
  const res = isPrime(num) ? 'yes' : 'no';

  return {
    task: num.toString(),
    result: res,
  };
};

export default () => launchGame(rules, playPrime);
