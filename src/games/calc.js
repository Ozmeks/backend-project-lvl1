import launchGame from '../index.js';
import generateNum from '../generate.js';

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const operations = ['+', '-', '*'];
  const operNum = generateNum(0, operations.length - 1);
  const randomOper = operations[operNum];

  let answer;
  const num1 = generateNum(1, 100);
  const num2 = generateNum(1, 100);
  switch (randomOper) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation: '${randomOper}'!`);
  }

  const question = `${num1} ${randomOper} ${num2}`;
  return [question, answer.toString()];
};

export default () => launchGame(description, generateGameData);
