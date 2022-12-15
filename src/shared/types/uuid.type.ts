import { ParseUUIDPipe } from '@nestjs/common';

export type UUID = string;

export enum UUIDGen {
  THIRD = 3,
  FOURTH = 4,
  FIFTH = 5,
  ALL = 'all',
}

/**
 * Validates if the provided value is a valid UUID
 *
 * @param value the value to test
 * @param version version of UUID to use
 * @returns a boolean confirming the validity of the value
 */
export function isUUID(value: unknown, version: UUIDGen = UUIDGen.ALL) {
  const isString = typeof value === 'string';
  if (!isString) {
    throw _exceptionFactory('The value passed as UUID is not a string');
  }
  const pattern = ParseUUIDPipe['uuidRegExps'][version];
  return pattern === null || pattern === void 0 ? void 0 : pattern.test(value);
}

/**
 * Validates if the provided value is a valid UUID, and if it is then extracts & returns the found UUIDs
 * @param value the value to get the UUID object
 * @returns an UUID or UUID array with the found UUID(s)
 */
export function getUUID(value: unknown, version: UUIDGen = UUIDGen.ALL) {
  const isString = typeof value === 'string';
  if (!isString) {
    throw _exceptionFactory('The value passed as UUID is not a string');
  }
  if (!isUUID(value, version)) {
    throw _exceptionFactory("The provided value doesn't a valid UUID");
  }
  const pattern = ParseUUIDPipe['uuidRegExps'][version];
  const matches = pattern.exec(value);
  if (matches.length === 1) {
    return matches[0] as UUID;
  }
  return matches.map((uuidMatch) => uuidMatch as UUID);
}

// TODO: improve error handling process
function _exceptionFactory(message: string) {
  return new Error(message);
}
