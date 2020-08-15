import { PetsModule } from './../pets/pets.module';
import { PetsService } from './../pets/pets.service';
import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { MongooseModule } from '@nestjs/mongoose';
import ClientSchema from './schemas/clients.schemas';
import PetsSchemas from '../pets/schemas/pets.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'client', schema: ClientSchema },
      { name: 'pets', schema: PetsSchemas },
    ]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService, PetsService],
})
export class ClientsModule {}
