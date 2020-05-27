#!/usr/bin/env node
import playCalc from '../games/calc.js';
import launchGame from '../src/index.js';

const rules = 'What is the result of the expression?';
launchGame(playCalc, rules);
