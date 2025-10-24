import Car from './model/Car.js';
import { InputView } from './view/InputView.js';
import { OutputView } from './view/OutputView.js';
import { Reader } from './view/Reader.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.round = 0;
  }

  async read() {
    const { names, round } = await Reader();

    this.cars = names.map((name) => new Car(name));
    this.round = round;
  }

  start() {
    OutputView.printStart();

    for (let i = 0; i < this.round; i++) {
      this.cars.forEach((car) => car.tryMove());
      OutputView.printRound(this.cars);
    }
  }
}
