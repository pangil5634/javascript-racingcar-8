import Car from './model/Car.js';
import { OutputView } from './view/OutputView.js';
import { readGameSettings } from './view/Reader.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.round = 0;
  }

  async read() {
    const { names, round } = await readGameSettings();

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

  result() {
    const maxStep = Math.max(...this.cars.map((car) => car.step));
    const winners = this.cars
      .filter((car) => car.step === maxStep)
      .map((car) => car.name)
      .join(', ');
    OutputView.printWinners(winners);
  }
}
