import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClient } from './interface/client.interface';
import { ClientDTO } from './DTO/client.dto';

@Injectable()
export class ClientsService {
  constructor(@InjectModel('client') private clientSchema: Model<IClient>) {}
  async getAll(): Promise<IClient[]> {
    return await this.clientSchema.find();
  }
  async getByID(id: string): Promise<IClient> {
    return await this.clientSchema.findById(id);
  }
  async createClient(client: ClientDTO): Promise<IClient> {
    const newClient = new this.clientSchema({ ...client });
    return await newClient.save();
  }
  async patchClient() {}
  async putClient() {}
  async deleteClient(id: string) {
    return await (await this.clientSchema.deleteOne({ _id: id })).ok;
  }
}
