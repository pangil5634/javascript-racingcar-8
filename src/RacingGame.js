import Car from './model/Car.js';
import { OutputView } from './view/OutputView.js';
import { readGameSettings } from './view/Reader.js';

export default class RacingGame {
  #cars = [];
  #round = 0;

  async #read() {
    const { names, round } = await readGameSettings();
    this.#cars = names.map((name) => new Car(name));
    this.#round = round;
  }

  #start() {
    OutputView.printStart();
    for (let round = 1; round <= this.#round; round++) {
      this.#cars.forEach((car) => car.tryMove());
      OutputView.printRound(this.#cars);
    }
  }

  #getWinners() {
    const maxStep = Math.max(...this.#cars.map((car) => car.step));
    return this.#cars
      .filter((car) => car.step === maxStep)
      .map((car) => car.name);
  }

  #result() {
    const winners = this.#getWinners().join(', ');
    OutputView.printWinners(winners);
  }

  async run() {
    await this.#read();
    this.#start();
    this.#result();
  }
}
