import { Observable, Subscriber } from 'rxjs';
import { IPublishPacket, MqttClient } from 'mqtt';
import { Inject, Injectable } from '@nestjs/common';

import { MqttService } from '../mqtt.module';
import { CreateMainDto } from './dto/create-main.dto';
import { UpdateMainDto } from './dto/update-main.dto';

export interface MqttMessage<T = any> {
  topic: string;
  data?: T;
}

@Injectable()
export class MainService {
  constructor(@Inject(MqttService) private readonly _mqttService: MqttClient) {
    this.messageAsObservable<Buffer>().subscribe((message) => {
      console.log('[mqtt:message.data]', message.data);
    });
  }

  create(createMainDto: CreateMainDto) {
    return 'This action adds a new main';
  }

  findAll() {
    return `This action returns all main`;
  }

  findOne(id: number) {
    return `This action returns a #${id} main`;
  }

  update(id: number, updateMainDto: UpdateMainDto) {
    return `This action updates a #${id} main`;
  }

  remove(id: number) {
    return `This action removes a #${id} main`;
  }

  /**
   * Listens for 'message' responses, and emits it's value
   * @returns an observable that  emits an MqttMessage
   */
  messageAsObservable<T = any>(): Observable<MqttMessage<T>> {
    // build new observable
    return new Observable<MqttMessage<T>>(
      // main observable function
      (subscriber: Subscriber<MqttMessage<T>>): void => {
        // function will handle when to emit value or error
        const observer = async (
          topic: string,
          payload: Buffer,
          packet: IPublishPacket,
        ): Promise<void> => {
          // main course
          try {
            // get payload data
            const data: T = payload as T;
            // build MqttMessage object
            const emittedValue: MqttMessage<T> = {
              data,
              topic,
            };
            // emit
            subscriber.next(emittedValue);
          } catch (e: any) {
            // throw error
            subscriber.error(e);
          }
        };
        // listen mqtt with subscriber function
        this._mqttService.on('message', observer);
      },
    );
  }
}
