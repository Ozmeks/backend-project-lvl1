import { launchGame, generateNum } from '../index.js';

const rules = 'What number is missing in the progression?';

const playProgression = () => {
  const first = generateNum(10);
  const diff = generateNum(10);
  const emptyIndex = generateNum(10) - 1;
  const progressionLength = 10;

  let str = (emptyIndex === 0) ? '..' : first;
  let i = 1;
  while (i < progressionLength) {
    if (emptyIndex === i) {
      str += ' ..';
    } else {
      str += ` ${first + i * diff}`;
    }
    i += 1;
  }
  const res = first + emptyIndex * diff;

  return {
    task: str,
    result: res.toString(),
  };
};

export default () => launchGame(rules, playProgression);
