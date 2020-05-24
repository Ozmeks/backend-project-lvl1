#!/usr/bin/env node

import gameGcd from '../games/gcd.js';
import launchGame from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
launchGame(gameGcd, rules);
