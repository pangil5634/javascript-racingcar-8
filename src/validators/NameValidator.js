import {
  EMPTY_STRING,
  ERROR_MESSAGES,
  MAX_NAME_LENGTH,
} from '../constants/index.js';

export const NameValidator = {
  validateEmptyName(names) {
    if (!names || names === EMPTY_STRING) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  },
  validateNameLength(name) {
    if (name.length > MAX_NAME_LENGTH) {
      throw new Error(
        `${ERROR_MESSAGES.INVALID_NAME_LENGTH} (target: ${name})`,
      );
    }
  },

  checkInvalidCommaUsage(nameList) {
    if (nameList.includes(EMPTY_STRING)) {
      throw new Error(ERROR_MESSAGES.INVALID_NAME_COMMA_USAGE);
    }
  },

  checkDuplicateNames(nameList) {
    if (new Set(nameList).size !== nameList.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
    }
  },
};
