import { genSaltSync, hashSync } from 'bcrypt';

const passwordHasher = (value: any) => {
  if (typeof value !== 'string') {
    throw new Error('Invalid value');
  }
  const passwordSalt = genSaltSync();
  return hashSync(value, passwordSalt);
};
const censorHash = (value: any) => {
  if (typeof value !== 'string') {
    throw new Error('Invalid value');
  }
  return '***';
};
export const passwordTransformer = {
  to: passwordHasher,
  from: censorHash,
};
