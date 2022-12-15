// DO NOT order by length, they have an specific order
export enum CharacterList {
  MARIO = 'MARIO',
  DONKEY_KONG = 'DONKEY KONG',
  LINK = 'LINK',
  SAMUS = 'SAMUS',
  DARK_SAMUS = 'DARK SAMUS',
  YOSHI = 'YOSHI',
  KIRBY = 'KIRBY',
  FOX = 'FOX',
  PIKACHU = 'PIKACHU',
  LUIGI = 'LUIGI',
  NESS = 'NESS',
  CAPTAIN = 'CAPTAIN',
  FALCON = 'FALCON',
  JIGGLYPUFF = 'JIGGLYPUFF',
  PEACH = 'PEACH',
  DAISY = 'DAISY',
  BOWSER = 'BOWSER',
  ICE_CLIMBERS = 'ICE CLIMBERS',
  SHEIK = 'SHEIK',
  ZELDA = 'ZELDA',
  DR_MARIO = 'DR. MARIO',
  PICHU = 'PICHU',
  FALCO = 'FALCO',
  MARTH = 'MARTH',
  LUCINA = 'LUCINA',
  YOUNG_LINK = 'YOUNG LINK',
  GANONDORF = 'GANONDORF',
  MEWTWO = 'MEWTWO',
  ROY = 'ROY',
  CHROM = 'CHROM',
  MR_GAME_AND_WATCH = 'MR. GAME & WATCH',
  META_KNIGHT = 'META KNIGHT',
  PIT = 'PIT',
  DARK_PIT = 'DARK PIT',
  ZERO_SUIT_SAMUS = 'ZERO SUIT SAMUS',
  WARIO = 'WARIO',
  SNAKE = 'SNAKE',
  IKE = 'IKE',
  POKÉMON_TRAINER = 'POKÉMON TRAINER',
  DIDDY_KONG = 'DIDDY KONG',
  LUCAS = 'LUCAS',
  SONIC = 'SONIC',
  KING_DEDEDE = 'KING DEDEDE',
  OLIMAR = 'OLIMAR',
  LUCARIO = 'LUCARIO',
  ROB = 'R.O.B.',
  TOON_LINK = 'TOON LINK',
  WOLF = 'WOLF',
  VILLAGER = 'VILLAGER',
  MEGA_MAN = 'MEGA MAN',
  Wii_Fit_TRAINER = 'Wii Fit TRAINER',
  ROSALINA_AND_LUMA = 'ROSALINA & LUMA',
  LITTLE_MAC = 'LITTLE MAC',
  GRENINJA = 'GRENINJA',
  MII_BRAWLER_ = 'MII BRAWLER ',
  MII_SWORDFIGHTER = 'MII SWORDFIGHTER',
  MII_GUNNER = 'MII GUNNER',
  PALUTENA = 'PALUTENA',
  PAC_MAN = 'PAC-MAN',
  ROBIN = 'ROBIN',
  SHULK = 'SHULK',
  BOWSER_JR = 'BOWSER JR.',
  DUCK_HUNT_DUO = 'DUCK HUNT DUO',
  RYU = 'RYU',
  KEN = 'KEN',
  CLOUD = 'CLOUD',
  CORRIN = 'CORRIN',
  BAYONETTA = 'BAYONETTA',
  INKLING = 'INKLING',
  RIDLEY = 'RIDLEY',
  SIMON = 'SIMON',
  RICHTER = 'RICHTER',
  KING_K_ROOL = 'KING K. ROOL',
  ISABELLE = 'ISABELLE',
  INCINEROAR = 'INCINEROAR',
  PIRANHA_PLANT = 'PIRANHA PLANT',
  JOKER = 'JOKER',
  HERO = 'HERO',
  BANJO_AND_KAZOOIE = 'BANJO & KAZOOIE',
  TERRY = 'TERRY',
  BYLETH = 'BYLETH',
  MIN_MIN = 'MIN MIN',
}

/**
 * Reads the CharacterList enum, and identifies the longest possible name in
 * the smash ultimate rooster
 * @desciption *Function to identify longest name length in smash ultimate
 * rooster, it is declared as constant, but it is still the (arrow) definition
 * of a function*
 * @returns a number object with the longest length found in the enum
 */
export const getLongestNameLength = (): number => {
  let longestLength = 0;
  const names = Object.values(CharacterList);
  names.forEach((name) => {
    if (name.length > longestLength) {
      longestLength = name.length;
    }
  });
  return longestLength;
};
