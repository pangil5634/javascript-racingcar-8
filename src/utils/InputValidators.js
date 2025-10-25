import { ERROR_MESSAGES } from '../constants/index.js';

export const InputValidators = {
  validateNames(names) {
    if (names === '') {
      // 입력값이 공백인 경우
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }

    const nameList = names.split(',').map((name) => name.trim());

    if (nameList.includes('')) {
      // 입력값에 쉼표가 잘못 사용된 경우
      throw new Error(ERROR_MESSAGES.INVALID_NAME_COMMA_USAGE);
    }

    nameList.forEach((name) => {
      if (name.length > 5) {
        // 이름이 5자 초과일 경우
        throw new Error(
          `${ERROR_MESSAGES.INVALID_NAME_LENGTH} (target : ${name})`,
        );
      }
    });

    if (new Set(nameList).size !== nameList.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
    }

    return nameList;
  },

  validateRound(round) {
    if (round === '') {
      // 입력값이 공백인 경우
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_EMPTY);
    }

    if (isNaN(round)) {
      // 입력값이 문자열일 경우
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_NOT_NUMBER);
    }

    const checkNum = Number(round);

    if (checkNum % 1 !== 0) {
      // 입력값이 소수일 경우
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_DECIMAL);
    }

    if (checkNum === 0) {
      // 입력값이 0일 경우
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_ZERO);
    }

    if (checkNum < 0) {
      // 입력값이 음수일 경우
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_NEGATIVE);
    }

    return checkNum;
  },
};
