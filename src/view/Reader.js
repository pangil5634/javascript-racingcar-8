import { InputValidators } from '../utils/InputValidators.js';
import { InputView } from './InputView.js';

async function readPlayerNames() {
  const names = await InputView.readNames();
  return InputValidators.validateNames(names);
}

async function readRoundCount() {
  const round = await InputView.readRound();
  return InputValidators.validateRound(round);
}

export async function readGameSettings() {
  const names = await readPlayerNames();
  const round = await readRoundCount();

  return { names, round };
}
