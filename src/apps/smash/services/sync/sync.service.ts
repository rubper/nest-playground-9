import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { from, map, Observable, switchMap, take } from 'rxjs';

import {
  GameCharacter,
  characterDataSource,
} from '@smash/interfaces/game.character.interface';
import { Character } from '@smash/models/character.model';
import { CharacterService } from '../character/character.service';

@Injectable()
export class SyncService {
  constructor(
    private readonly _httpService: HttpService,
    private readonly _characterService: CharacterService,
  ) {
    this.scheduledSync();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  scheduledSync() {
    // console.log('[smash:cron]', 'cron activated')
    this.getCharactersData()
      .pipe(
        switchMap((charList: GameCharacter[]) => {
          return from(charList);
        }),
      )
      .subscribe((char: GameCharacter) => {
        console.log('[sync.service:char]', char);

        this.addCharacter(char);
      });
  }

  /**
   * Obtains the list of characters available in-game
   *
   * @returns an array of GameCharacter objects
   */
  getCharactersData(): Observable<GameCharacter[]> {
    return this._httpService.get<GameCharacter[]>(characterDataSource).pipe(
      take(1),
      map((response) => response.data),
    );
  }

  /**
   * Checks if character already exist, if it does then updates the object, if it doesnt then it creates it
   *
   * @param data the raw data to add the character
   * @returns a promise that resolves to a Character object
   */
  async addCharacter(data: GameCharacter) {
    let character: Character = await this._characterService.findOneBy({
      externalId: +data.order,
    });
    if (character) {
      character.fromRaw(data);
    } else {
      character = new Character(data);
    }
    return this._characterService.save(character);
  }
}
