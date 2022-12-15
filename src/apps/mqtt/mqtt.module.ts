import { Module } from '@nestjs/common';
import { connect } from 'mqtt';
import { env } from 'process';
import { MainModule } from './main/main.module';

export const ModuleName = 'mqtt';
export const MqttService = 'NP9.Services.Mqtt';

const mqttFactory = (...args: any[]) => {
  const brokerData = {
    broker: env.BROKER,
    host: env.BROKER_HOST,
    port: env.BROKER_PORT,
  };
  console.log('[mqtt:brokerData]', brokerData);

  return connect(env.BROKER, { host: env.BROKER_HOST, port: +env.BROKER_PORT });
};

@Module({
  providers: [{ provide: MqttService, useFactory: mqttFactory }],
  imports: [MainModule],
})
export class MqttModule {}
