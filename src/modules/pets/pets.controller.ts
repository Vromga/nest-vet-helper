import { PetDTO } from './DTO/pet.dto';
import { PetsService } from './pets.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IPets } from './interface/pets.interface';

@Controller('pets')
export class PetsController {
  constructor(private ps: PetsService) {}

  @Get()
  async getAllPets(): Promise<IPets[]> {
    return await this.ps.getAllPets();
  }

  @Get('/:id')
  async getPetsById(@Param('id') id: string): Promise<IPets> {
    return await this.ps.getPetById(id);
  }

  @Get('/owner/:id')
  async getAllPetsByIdOwner(@Param('id') id: string): Promise<IPets[]> {
    return await this.ps.getAllPetsByIdOwner(id);
  }

  @Post()
  async createPet(@Body() petInfo: PetDTO): Promise<IPets> {
    return this.ps.createPet(petInfo);
  }
}
