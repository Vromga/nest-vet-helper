import { Module } from '@nestjs/common';
import { BreedsController } from './breeds.controller';

@Module({
  imports: [],
  controllers: [BreedsController],
  providers: [],
})
export class BreedsModule {}
