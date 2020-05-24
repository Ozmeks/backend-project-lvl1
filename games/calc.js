import * as msg from '../src/cli.js';

export default () => {
  const operationNum = Math.floor(Math.random() * 3) + 1;
  let operation = '';
  let res;
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  switch (operationNum) {
    case 1:
      operation = `${num1} + ${num2}`;
      res = num1 + num2;
      break;
    case 2:
      operation = `${num1} - ${num2}`;
      res = num1 - num2;
      break;
    case 3:
      operation = `${num1} * ${num2}`;
      res = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation number: '${operationNum}'!`);
  }
  msg.getQuestion(operation);

  return (res.toString() === msg.getAnswer());
};
