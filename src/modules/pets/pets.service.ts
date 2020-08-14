import { PetDescriptionOnlyDTO } from './DTO/petDescriptionOnly.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPets } from './interface/pets.interface';
import { Model } from 'mongoose';
import { PetDTO } from './DTO/pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectModel('pets') private ps: Model<IPets>) {}

  async getAllPets(): Promise<IPets[]> {
    return this.ps.find();
  }
  async getPetById(id: string) {}
  async getAllPetsByIdOwner(idOwner: string) {}
  async createPet(idOwner: string, petInfo: IPets) {}
  async deleteAllPetsByIdOwner(idOwner: string) {}
  async deletePetById(id: string) {}
  async patchPetDescription(id: string, description: PetDescriptionOnlyDTO) {}
  async updatePet(id: string, petInfo: PetDTO) {}
}
