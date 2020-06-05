import launchGame from '../index.js';
import generateNum from '../generate.js';

const description = 'What number is missing in the progression?';

const generateQuestion = () => {
  const first = generateNum(1, 10);
  const diff = generateNum(1, 10);
  const emptyIndex = generateNum(0, 9);
  const progressionLength = 10;

  let str = (emptyIndex === 0) ? '..' : first;
  let i = 1;
  while (i < progressionLength) {
    if (emptyIndex === i) {
      str = `${str} ..`;
    } else {
      str = `${str} ${first + i * diff}`;
    }
    i += 1;
  }
  const answer = first + emptyIndex * diff;
  const question = str;
  return [question, answer.toString()];
};

export default () => launchGame(description, generateQuestion);
