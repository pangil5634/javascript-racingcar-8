import { InputValidators } from '../utils/InputValidators.js';
import { InputView } from './InputView.js';

export async function Reader() {
  let names = await InputView.readNames();
  names = InputValidators.validateNames(names);

  let round = await InputView.readRound();
  round = InputValidators.validateRound(round);

  return { names, round };
}
