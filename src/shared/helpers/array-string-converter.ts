export const DefaultSeparator = '/';

/**
 * Prints to string an object with the string type record format
 * @param value the value to 'stringify'
 * @returns an string with the object
 */
export const defaultNumberArrayToString = (value: number[]): string => {
  let str = '';
  value.forEach((score: number, index: number) => {
    if (index === 0) {
      str = `${score}`;
    } else {
      str = `${str}${DefaultSeparator}${score}`;
    }
  });
  return str;
};

/**
 * Parses an string into an array value
 * @param value the string to parse into array
 * @returns a number array with the scores
 */
export const defaultStringToNumberArray = (value: string): number[] => {
  return value
    .split(DefaultSeparator)
    .filter((score) => !!score)
    .map((score) => +score);
};
