#!/usr/bin/env node
import gameEven from '../games/even.js';
import launchGame from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
launchGame(gameEven, rules);
