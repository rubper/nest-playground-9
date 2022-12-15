export const characterDataSource =
  'https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters';

export interface GameCharacter {
  alsoAppearsIn: PreviousSmash[];
  availability: Availability;
  images: ApiImage;
  name: string;
  order: string;
  series: ApiSeries;
}

export interface ApiImage {
  icon: string;
  portrait: string;
}

export interface ApiSeries {
  icon: string;
  name: string;
}

export enum PreviousSmash {
  SSB = 'SSB',
  Melee = 'Melee',
  Brawl = 'Brawl',
  SSB4 = 'SSB4',
}

export enum Availability {
  'Starter',
  'Unlockable',
  'Downloadable',
}
