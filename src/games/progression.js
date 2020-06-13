import launchGame from '../index.js';
import generateNum from '../generate.js';

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const first = generateNum(1, 10);
  const diff = generateNum(1, 10);
  const progressionLength = 10;
  const emptyIndex = generateNum(0, progressionLength - 1);

  const progressionItems = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const newItem = (i === emptyIndex) ? '..' : first + i * diff;
    progressionItems.push(newItem);
  }

  const question = progressionItems.join(' ');
  const answer = first + emptyIndex * diff;
  return [question, answer.toString()];
};

export default () => launchGame(description, generateGameData);
