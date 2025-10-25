import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGES } from '../constants/index.js';

export const OutputView = {
  printStart() {
    Console.print(IO_MESSAGES.OUTPUT_START);
  },

  printRound(cars) {
    cars.forEach((car) =>
      Console.print(`${car.name} : ${'-'.repeat(car.step)}`),
    );
    Console.print('');
  },

  printWinners(winners) {
    Console.print(`${IO_MESSAGES.OUTPUT_WINNER}${winners}`);
  },
};
