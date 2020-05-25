#!/usr/bin/env node

import gameProgression from '../games/progression.js';
import launchGame from '../src/index.js';

const rules = 'What number is missing in the progression?';
launchGame(gameProgression, rules);
