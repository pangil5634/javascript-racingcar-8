export const ERROR_MESSAGES = {
  // Car name input errors
  INVALID_NAME_LENGTH: '[ERROR] Each car name must be 5 characters or less.',
  INVALID_NAME_COMMA_USAGE:
    '[ERROR] Input cannot end with a comma (,) or contain consecutive commas (,,).',
  EMPTY_INPUT: '[ERROR] You must enter at least one car name.',
  INVALID_NAME_WHITESPACE: '[ERROR] Car names cannot contain only spaces.',
  DUPLICATE_NAME: '[ERROR] Duplicate car names are not allowed.',

  // Attempt count input errors
  INVALID_ROUND_NOT_NUMBER:
    '[ERROR] The number of attempts must be a numeric value.',
  INVALID_ROUND_EMPTY: '[ERROR] You must enter the number of attempts.',
  INVALID_ROUND_DECIMAL: '[ERROR] The number of attempts must be an integer.',
  INVALID_ROUND_ZERO:
    '[ERROR] The number of attempts must be greater than zero.',
  INVALID_ROUND_NEGATIVE: '[ERROR] The number of attempts cannot be negative.',
};
