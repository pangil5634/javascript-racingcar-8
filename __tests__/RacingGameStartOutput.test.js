import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((num) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(num);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("🏁 자동차 경주 - 시작(라운드별 출력) 테스트", () => {
  test("라운드별 실행 결과가 올바르게 출력된다.", async () => {
    // given
    const inputs = ["pobi,woni,jun", "5"];
    const randoms = [
      // 1라운드
      4, 4, 3,
      // 2라운드
      4, 4, 3,
      // 3라운드
      4, 4, 3,
      // 4라운드
      4, 4, 3,
      // 5라운드
      4, 4, 4,
    ];

    mockQuestions(inputs);
    mockRandoms(randoms);

    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.run();

    // then
    // 실제 출력된 로그 중 자동차 결과만 추출
    const actualLogs = logSpy.mock.calls
      .map((call) => call[0])
      .filter((log) => log.includes(":") && !log.includes("최종 우승자"));

    // 각 자동차별 출력이 순서대로 누적되는지 확인
    const expected = [
      "pobi : -",
      "woni : -",
      "jun : ",
      "pobi : --",
      "woni : --",
      "jun : ",
      "pobi : ---",
      "woni : ---",
      "jun : ",
      "pobi : ----",
      "woni : ----",
      "jun : ",
      "pobi : -----",
      "woni : -----",
      "jun : -",
    ];

    // 출력 개수 일치 검증
    expect(actualLogs.length).toBe(expected.length);

    // 순서 및 내용 일치 검증
    expected.forEach((log, index) => {
      expect(actualLogs[index]).toBe(log);
    });
  });
});
