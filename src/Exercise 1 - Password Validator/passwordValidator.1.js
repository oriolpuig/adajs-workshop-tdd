const LOWER_CASE_REGEX = /[a-z]/;
const UPPER_CASE_REGEX = /[A-Z]/;
const NUMBER_REGEX = /[0-9]/;
const SPECIAL_CHARS = /[*!&%$]/;

export function isValidPassword(password) {
  return isString(password)
    && hasAtLeastEightCharacters(password)
    && hasLowerCaseLetter(password)
    && hasUpperCaseLetter(password)
    && containsNumbers(password)
    && containsSpecialChars(password);
}

export const isString = value => typeof value === 'string';
export const hasAtLeastEightCharacters = value => value.length >= 8;
export const hasLowerCaseLetter = value => LOWER_CASE_REGEX.test(value)
export const hasUpperCaseLetter = value => UPPER_CASE_REGEX.test(value)
export const containsNumbers = value => NUMBER_REGEX.test(value);
export const containsSpecialChars = value => SPECIAL_CHARS.test(value);
