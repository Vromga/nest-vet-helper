import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from '../configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { port } = configuration();
  await app.listen(port);
  console.log(`Server started on port: ${port}`);
}
bootstrap();
