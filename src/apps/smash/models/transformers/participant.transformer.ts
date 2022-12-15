import { Participant } from 'brackets-model';

const participantStringify = (value: any) => {
  return JSON.stringify(value);
};
const parseParticipant = (value: any) => {
  if (typeof value !== 'string') {
    throw new Error('Invalid value');
  }
  return JSON.parse(value) as Participant;
};
export const participantTransformer = {
  to: participantStringify,
  from: parseParticipant,
};
