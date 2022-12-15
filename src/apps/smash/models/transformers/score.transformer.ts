import {
  defaultNumberArrayToString,
  defaultStringToNumberArray,
} from 'src/shared/helpers/array-string-converter';

export const ScoreTransformer = {
  to: defaultNumberArrayToString,
  from: defaultStringToNumberArray,
};
