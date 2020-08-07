import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const conf = app.get(ConfigService);
  const PORT = conf.get('PORT');
  await app.listen(PORT);
  console.log(`Server started on port: ${PORT}`);
}
bootstrap();
