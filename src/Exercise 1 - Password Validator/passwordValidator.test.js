import { containsNumbers, containsSpecialChars, hasAtLeastEightCharacters, hasUpperCaseLetter, hasLowerCaseLetter, isString } from './passwordValidator.1'

describe("The password validator verifies that a valid password", () => {
  const password = "Password1&";

  it("is a string", () => {
    const isValid = isString(password);
    expect(isValid).toBeTruthy();
  });

  it("must contain at least 8 characters long", () => {
    const isValid = hasAtLeastEightCharacters(password);
    expect(isValid).toBeTruthy();
  });

  it("must contain at least one letter (a-z)", () => {
    const isValid = hasLowerCaseLetter(password);
    expect(isValid).toBeTruthy();
  });

  it("must contain at least one uppercase letter (A-Z)", () => {
    const isValid = hasUpperCaseLetter(password);
    expect(isValid).toBeTruthy();
  });

  it("must contain at least one number (0-9)", () => {
    const isValid = containsNumbers(password);
    expect(isValid).toBeTruthy();
  });

  it("must contain at least one non-word character (not a letter nor a number), e.g. *, !, &, %, $", () => {
    const isValid = containsSpecialChars(password);
    expect(isValid).toBeTruthy();
  });
});

describe("The password is not valid if", () => {
  it('is not a string', () => {
    const password = 1;
    const isNotValid = isString(password);
    expect(isNotValid).toBeFalsy();
  });
  it('doesn\'t have at least 8 characters', () => {
    const password = '1234567';
    const isNotValid = hasAtLeastEightCharacters(password);
    expect(isNotValid).toBeFalsy();
  });

  it("mustn't contain at least one letter (a-z)", () => {
    const password = '123345';
    const isNotValid = hasLowerCaseLetter(password);
    expect(isNotValid).toBeFalsy();
  });

  it("mustn't contain at least one uppercase letter (A-Z)", () => {
    const password = '123345';
    const isNotValid = hasUpperCaseLetter(password);
    expect(isNotValid).toBeFalsy();
  });

  it("mustn't contain at least one number (0-9)", () => {
    const password = 'password';
    const isNotValid = containsNumbers(password);
    expect(isNotValid).toBeFalsy();
  });

  it("mustn't contain at least one non-word character (not a letter nor a number), e.g. *, !, &, %, $", () => {
    const password = 'password-';
    const isValid = containsSpecialChars(password);
    expect(isValid).toBeFalsy();
  });
});
