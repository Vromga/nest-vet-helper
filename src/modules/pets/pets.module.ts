import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import PetsSchemas from './schemas/pets.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'pets', schema: PetsSchemas }])],
})
export class PetsModule {}
