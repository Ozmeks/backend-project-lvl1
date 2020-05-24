#!/usr/bin/env node
import gameCalc from '../games/calc.js';
import launchGame from '../src/index.js';

const rules = 'What is the result of the expression?';
launchGame(gameCalc, rules);
