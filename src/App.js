import RacingGame from './RacingGame.js';

class App {
  async run() {
    try {
      const racingGame = new RacingGame();

      await racingGame.run();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
