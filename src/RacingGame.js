import Car from './model/Car.js';
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

    console.log(this.cars);
    console.log(this.round);
  }
}
