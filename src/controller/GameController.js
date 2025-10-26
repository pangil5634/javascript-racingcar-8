import { InputValidators } from '../validators/InputValidators.js';
import { InputView } from '../view/InputView.js';
import { OutputView } from '../view/OutputView.js';
import RacingGame from '../model/RacingGame.js';

export default class GameController {
  #racingGame;

  async run() {
    const { names, round } = await this.#readGameSettings();
    this.#racingGame = new RacingGame(names, round);

    this.#runGame();
    this.#showResult();
  }

  #runGame() {
    OutputView.printStart();
    const roundCount = this.#racingGame.getRound();
    for (let round = 1; round <= roundCount; round++) {
      const cars = this.#racingGame.playRound();
      OutputView.printRound(cars);
    }
  }

  #showResult() {
    const winners = this.#racingGame.getWinners();
    OutputView.printWinners(winners.join(', '));
  }

  async #readPlayerNames() {
    const names = await InputView.readNames();
    return InputValidators.validateNames(names);
  }

  async #readRoundCount() {
    const round = await InputView.readRound();
    return InputValidators.validateRound(round);
  }

  async #readGameSettings() {
    const names = await this.#readPlayerNames();
    const round = await this.#readRoundCount();

    return { names, round };
  }
}
