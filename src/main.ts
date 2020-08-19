import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import configuration from '../configuration';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const { port } = configuration();
  app.setGlobalPrefix('api');
  app.use(compression({ level: 9 }));
  await app.listen(port);
  logger.log(`App listening on port ${port}`);
}
bootstrap();
