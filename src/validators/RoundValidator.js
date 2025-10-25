import { EMPTY_STRING, ERROR_MESSAGES } from '../constants/index.js';

export const RoundValidator = {
  validateEmptyRound(round) {
    if (round === EMPTY_STRING) {
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_EMPTY);
    }
  },
  validateRoundIsNumber(round) {
    if (isNaN(round)) {
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_NOT_NUMBER);
    }
  },

  validateRoundIsInteger(round) {
    if (round % 1 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_DECIMAL);
    }
  },

  validateRoundIsNotZero(round) {
    if (round === 0) {
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_ZERO);
    }
  },

  validateRoundIsPositive(round) {
    if (round < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_ROUND_NEGATIVE);
    }
  },
};
