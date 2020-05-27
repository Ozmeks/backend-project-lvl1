#!/usr/bin/env node
import gamePrime from '../games/prime.js';
import launchGame from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
launchGame(gamePrime, rules);
