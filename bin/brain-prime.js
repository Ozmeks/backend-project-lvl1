#!/usr/bin/env node
import playPrime from '../games/prime.js';
import launchGame from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
launchGame(playPrime, rules);
