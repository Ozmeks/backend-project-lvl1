import * as msg from '../src/cli.js';

export default () => {
  const num = Math.ceil(Math.random() * 10);
  msg.getQuestion(num);
  const answer = msg.getAnswer();
  return ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0));
};
