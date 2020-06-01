import launchGame from '../index.js';
import generateNum from '../generate.js';

const rules = 'What is the result of the expression?';

const playCalc = () => {
  const operations = ['+', '-', '*'];
  const randomOper = operations[generateNum(operations.length) - 1];

  let res;
  const num1 = generateNum(100);
  const num2 = generateNum(100);
  switch (randomOper) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation: '${randomOper}'!`);
  }

  return {
    task: `${num1} ${randomOper} ${num2}`,
    result: res.toString(),
  };
};

export default () => launchGame(rules, playCalc);
