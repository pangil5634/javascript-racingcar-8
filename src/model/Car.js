import { Random } from '@woowacourse/mission-utils';
import {
  MOVE_THRESHOLD,
  RANDOM_MAX,
  RANDOM_MIN,
  STEP_INCREMENT,
} from '../constants/index.js';
export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }
  tryMove() {
    const randomNum = Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
    if (randomNum >= MOVE_THRESHOLD) this.step += STEP_INCREMENT;
  }
}
