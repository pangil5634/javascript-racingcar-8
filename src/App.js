import GameController from './controller/GameController.js';

class App {
  async run() {
    try {
      const gameController = new GameController();
      await gameController.run();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
