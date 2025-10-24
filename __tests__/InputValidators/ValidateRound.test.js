import App from '../../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../../src/constants/index.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('validateRound() — 시도 횟수 검증', () => {
  test('[ERROR] 입력값이 문자열일 경우', async () => {
    // given
    const inputs = ['pobi,crong', 'abc'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_ROUND_NOT_NUMBER,
    );
  });

  test('[ERROR] 입력값이 공백인 경우', async () => {
    // given
    const inputs = ['pobi,crong', ''];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.INVALID_ROUND_EMPTY);
  });

  test('[ERROR] 입력값이 소수일 경우', async () => {
    // given
    const inputs = ['pobi,crong', '3.5'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_ROUND_DECIMAL,
    );
  });

  test('[ERROR] 입력값이 0일 경우', async () => {
    // given
    const inputs = ['pobi,crong', '0'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.INVALID_ROUND_ZERO);
  });

  test('[ERROR] 입력값이 음수일 경우', async () => {
    // given
    const inputs = ['pobi,crong', '-2'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_ROUND_NEGATIVE,
    );
  });
});
