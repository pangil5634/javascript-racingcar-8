const ERROR_PREFIX = `[ERROR]`;

export const ERROR_MESSAGES = {
  // Car name input errors
  INVALID_NAME_LENGTH: `${ERROR_PREFIX} +Each car name must be 5 characters or less.`,
  INVALID_NAME_COMMA_USAGE: `${ERROR_PREFIX} + Input cannot end with a comma (,) or contain consecutive commas (,,).`,
  EMPTY_INPUT: `${ERROR_PREFIX} + You must enter at least one car name.`,
  INVALID_NAME_WHITESPACE: `${ERROR_PREFIX} + Car names cannot contain only spaces.`,
  DUPLICATE_NAME: `${ERROR_PREFIX} + Duplicate car names are not allowed.`,

  // Attempt count input errors
  INVALID_ROUND_NOT_NUMBER: `${ERROR_PREFIX} + The number of attempts must be a numeric value.`,
  INVALID_ROUND_EMPTY: `${ERROR_PREFIX} + You must enter the number of attempts.`,
  INVALID_ROUND_DECIMAL: `${ERROR_PREFIX} + The number of attempts must be an integer.`,
  INVALID_ROUND_ZERO: `${ERROR_PREFIX} + The number of attempts must be greater than zero.`,
  INVALID_ROUND_NEGATIVE: `${ERROR_PREFIX} + The number of attempts cannot be negative.`,
};
