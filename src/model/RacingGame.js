import Car from './Car.js';

export default class RacingGame {
  #cars;
  #round;

  constructor(names, round) {
    this.#cars = names.map((name) => new Car(name));
    this.#round = round;
  }

  playRound() {
    this.#cars.forEach((car) => car.tryMove());
    return this.#cars;
  }

  getWinners() {
    const maxStep = Math.max(...this.#cars.map((car) => car.step));
    return this.#cars
      .filter((car) => car.step === maxStep)
      .map((car) => car.name);
  }

  getRound() {
    return this.#round;
  }
}
