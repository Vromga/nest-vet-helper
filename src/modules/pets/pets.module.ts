import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import PetsSchemas from './schemas/pets.schemas';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'pets', schema: PetsSchemas }])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
