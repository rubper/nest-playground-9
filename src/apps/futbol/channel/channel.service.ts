import { JSDOM } from 'jsdom';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';

import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Resources } from 'src/shared/constants/resources.const';

@Injectable()
export class ChannelService {
  private readonly _dataEndpoint = `${Resources.CHANNEL_API}/agenda`;
  constructor(private readonly _httpClient: HttpService) {}
  create(createChannelDto: CreateChannelDto) {
    return 'This action adds a new channel';
  }

  findAll(): Observable<HTMLElement> {
    return this.extractChannels();
  }

  findOne(id: number) {
    return `This action returns a #${id} channel`;
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }

  extractChannels(): Observable<HTMLElement> {
    console.log('[futbol:this._dataEndpoint]', this._dataEndpoint);

    return this._httpClient
      .get(this._dataEndpoint)
      .pipe(
        map((response: AxiosResponse<string>) =>
          this.parseChannel(response.data),
        ),
      );
  }

  parseChannel(htmlContent: string): any {
    return this.parseHtml(htmlContent);
  }

  parseHtml(htmlContent: string): any {
    // sanitize scripts
    const script = /<script([\S\s]*?)>([\S|\s|\n?\r]*?)<\/script>/gi;
    const safeDoc = htmlContent.replace(script, '');

    // remove styles
    const styles = /<style([\S\s]*?)>([\S|\s|\n?\r]*?)<\/style>/gi;
    const stylessDoc = safeDoc.replace(styles, '');

    // remove breaklines
    const breaklines = /(\r\n|\n|\r)*/gm;
    const trimmedString = stylessDoc.replace(breaklines, '');

    // remove extra spaces
    const whitespaces = /(\s)+/gm;
    const minified = trimmedString.replace(whitespaces, ` `);

    const dom = new JSDOM(minified);
    const queryResult: HTMLUListElement =
      dom.window.document.querySelector('ul.menu');
    if (!queryResult) {
      throw new HttpException('Menu not found', 404);
    }
    const eventList: NodeListOf<Element> =
      queryResult.querySelectorAll('li:not(.subitem1)');
    for (let i = 0; i < eventList.length; i++) {
      console.log('[futbol:eventList]', 'Looping');
      const tournament = eventList.item(i);
      console.log('[futbol:currentTorunament]', tournament.innerHTML);
      const tournamentId = tournament.getAttribute('class');
      if (tournamentId !== 'CAT') {
        return;
      }
      console.log('[futbol:qatarmatches]', 'Catar Matches');
      // get current match channels
      const matchChannels = tournament.getElementsByTagName('ul, li.subitem1');
      for (let j = 0; j < matchChannels.length; j++) {
        const matchChannel = matchChannels.item(j);
        console.log(
          '[futbol:matchChannel.textContent]',
          matchChannel.textContent,
        );
      }
    }

    return queryResult;
  }
}
