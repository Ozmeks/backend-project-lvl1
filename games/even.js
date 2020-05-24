import * as msg from '../src/cli.js';

export default () => {
  const num = Math.ceil(Math.random() * 10);
  msg.getQuestion(num);

  const answer = msg.getAnswer();
  const res = (num % 2 === 0) ? 'yes' : 'no';
  if (answer === res) {
    return true;
  }
  msg.getError(answer, res);
  return false;
};
