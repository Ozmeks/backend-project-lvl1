import * as msg from '../src/cli.js';

export default () => {
  const first = Math.ceil(Math.random() * 10);
  const diff = Math.ceil(Math.random() * 10);
  const empty = Math.ceil(Math.random() * 10) - 1;

  let str = (empty === 0) ? '..' : first;
  let i = 1;
  while (i < 10) {
    if (empty === i) {
      str += ' ..';
    } else {
      str += ` ${first + i * diff}`;
    }
    i += 1;
  }
  msg.getQuestion(str);

  const answer = msg.getAnswer();
  const res = first + empty * diff;
  if (answer === res.toString()) {
    return true;
  }
  msg.getError(answer, res);
  return false;
};
