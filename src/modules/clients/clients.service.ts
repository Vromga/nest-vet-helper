import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClient } from './interface/client.interface';

@Injectable()
export class ClientsService {
  constructor(@InjectModel('client') private clientSchema: Model<IClient>) {}
  async getAll(): Promise<IClient[]> {
    return this.clientSchema.find();
  }
  async getByID() {}
  async createClient() {}
  async patchClient() {}
  async putClient() {}
  async deleteClient() {}
}
