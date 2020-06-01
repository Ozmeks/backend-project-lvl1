import { launchGame, generateNum } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => {
  const num = generateNum(100);

  const res = (num % 2 === 0) ? 'yes' : 'no';

  return {
    task: num.toString(),
    result: res,
  };
};

export default () => launchGame(rules, playEven);
