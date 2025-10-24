import App from '../../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../../src/constants/index.js';

// ✅ mock setup
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('validateNames() — 자동차 이름 검증', () => {

  test('[ERROR] 이름이 5자 초과일 경우', async () => {
    // given
    const inputs = ['pobiii,crong', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  });

  test('[ERROR] 쉼표로 끝나는 경우', async () => {
    // given
    const inputs = ['pobi,crong,', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_NAME_COMMA_USAGE
    );
  });

  test('[ERROR] 쉼표가 연속되는 경우', async () => {
    // given
    const inputs = ['pobi,,crong', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      ERROR_MESSAGES.INVALID_NAME_COMMA_USAGE
    );
  });

  test('[ERROR] 동일한 이름이 중복되는 경우', async () => {
    // given
    const inputs = ['pobi,crong,pobi', '1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.DUPLICATE_NAME);
  });
});
