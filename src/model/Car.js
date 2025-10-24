import { Random } from '@woowacourse/mission-utils';
export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }
  tryMove() {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) this.step += 1;
  }
}
