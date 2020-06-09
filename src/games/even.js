import launchGame from '../index.js';
import generateNum from '../generate.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const num = generateNum(1, 100);
  const answer = (num % 2 === 0) ? 'yes' : 'no';
  const question = num.toString();
  return [question, answer];
};

export default () => launchGame(description, generateGameData);
