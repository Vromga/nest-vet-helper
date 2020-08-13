import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { MongooseModule } from '@nestjs/mongoose';
import ClientSchema from './schemas/clients.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'client', schema: ClientSchema }]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
