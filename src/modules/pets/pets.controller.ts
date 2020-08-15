import { PetDescriptionAndIsLiveDTO } from './DTO/petDescriptionAndIsLive.dto';
import { PetDTO } from './DTO/pet.dto';
import { PetsService } from './pets.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
  Put,
} from '@nestjs/common';
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

  @Delete('/:id')
  async deletePetsById(@Param('id') id: string) {
    return this.ps.deletePetById(id);
  }

  @Patch('/:id')
  async updatePropertiesDescriptionAndIsLive(
    @Param('id') id: string,
    @Body() body: PetDescriptionAndIsLiveDTO,
  ): Promise<IPets> {
    return this.ps.patchPetDescriptionAndIsLive(id, body);
  }

  @Put('/:id')
  async updatePet(
    @Param('id') id: string,
    @Body() body: PetDTO,
  ): Promise<IPets> {
    return this.ps.updatePet(id, body);
  }
}
