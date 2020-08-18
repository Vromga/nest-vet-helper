import { Module } from '@nestjs/common';
import { BreedsController } from './breeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import BreedSchemas from './schemas/breed.schemas';
import { BreedsService } from './breeds.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'breed', schema: BreedSchemas }]),
  ],
  controllers: [BreedsController],
  providers: [BreedsService],
})
export class BreedsModule {}
