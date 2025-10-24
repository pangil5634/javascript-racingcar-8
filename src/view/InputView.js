import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGES } from '../constants/index.js';

export const InputView = {
  async readNames() {
    return await Console.readLineAsync(IO_MESSAGES.INPUT_NAMES);
  },

  async readRound() {
    return await Console.readLineAsync(IO_MESSAGES.INPUT_ROUND);
  },
};
