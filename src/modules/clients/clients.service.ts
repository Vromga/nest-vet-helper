import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClient } from './interface/client.interface';
import { ClientDTO } from './DTO/client.dto';
import { ClientDescriptionOnlyDTO } from './DTO/clientDescriptionOnly.dto';
import { PetsService } from '../pets/pets.service';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('client') private clientSchema: Model<IClient>,
    private petsService: PetsService,
  ) {}
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
  async patchClient(id: string, body: ClientDescriptionOnlyDTO) {
    return await this.clientSchema.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
  async putClient(id: string, body: ClientDTO) {
    return await this.clientSchema.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
  async deleteClient(id: string): Promise<IClient | boolean> {
    const deleteClient = await this.clientSchema.findOneAndDelete({ _id: id });
    if (deleteClient) {
      const deletePets = (await this.petsService.deleteAllPetsByIdOwner(id)).ok;
      if (deletePets) {
        return deleteClient;
      }
    }
    return false;
  }
}
