#!/usr/bin/env node
import playEven from '../games/even.js';
import launchGame from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
launchGame(playEven, rules);
