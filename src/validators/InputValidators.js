import { NameValidator } from './NameValidator.js';
import { RoundValidator } from './RoundValidator.js';

export const InputValidators = {
  validateNames(names) {
    // 입력값이 공백인 경우
    NameValidator.validateEmptyName(names);

    const nameList = names.split(',').map((name) => name.trim());

    // 입력값에 쉼표가 잘못 사용된 경우
    NameValidator.checkInvalidCommaUsage(nameList);

    // 이름이 5자 초과일 경우
    nameList.forEach(NameValidator.validateNameLength);

    // 중복되는 이름이 존재할 경우
    NameValidator.checkDuplicateNames(nameList);

    return nameList;
  },

  validateRound(round) {
    // 입력값이 공백인 경우
    RoundValidator.validateEmptyRound(round);

    // 입력값이 문자열일 경우
    RoundValidator.validateRoundIsNumber(round);

    const checkNum = Number(round);

    // 입력값이 소수일 경우
    RoundValidator.validateRoundIsInteger(checkNum);

    // 입력값이 0일 경우
    RoundValidator.validateRoundIsNotZero(checkNum);

    // 입력값이 음수일 경우
    RoundValidator.validateRoundIsPositive(checkNum);

    return checkNum;
  },
};
