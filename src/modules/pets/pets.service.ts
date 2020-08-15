import { PetDescriptionAndIsLiveDTO } from './DTO/petDescriptionAndIsLive.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPets } from './interface/pets.interface';
import { Model } from 'mongoose';
import { PetDTO } from './DTO/pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectModel('pets') private ps: Model<IPets>) {}

  async getAllPets(): Promise<IPets[]> {
    return await this.ps.find();
  }
  async getPetById(id: string): Promise<IPets> {
    return await this.ps.findById(id);
  }
  async getAllPetsByIdOwner(idOwner: string): Promise<IPets[]> {
    return await this.ps.find({ ownerId: idOwner });
  }
  async createPet(petInfo: PetDTO) {
    const newPet = new this.ps({ ...petInfo });
    return await newPet.save();
  }
  async deleteAllPetsByIdOwner(ownerId: string) {
    return await this.ps.deleteMany({ ownerId });
  }
  async deletePetById(id: string) {
    return (await this.ps.deleteOne({ _id: id })).ok;
  }
  async patchPetDescriptionAndIsLive(
    id: string,
    body: PetDescriptionAndIsLiveDTO,
  ): Promise<IPets> {
    return this.ps.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
  async updatePet(id: string, petInfo: PetDTO): Promise<IPets> {
    return this.ps.findByIdAndUpdate(id, petInfo, {
      new: true,
    });
  }
}
