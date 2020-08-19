import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from '../configuration';

import { ClientsModule } from './modules/clients/clients.module';
import { PetsModule } from './modules/pets/pets.module';
import { BreedsModule } from './modules/breeds/breeds.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${configuration().login}:${
        configuration().password
      }@cluster0-k6wuj.mongodb.net/${
        configuration().dbName
      }?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    ),
    ClientsModule,
    PetsModule,
    BreedsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
