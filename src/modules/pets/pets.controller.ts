import { PetsService } from './pets.service';
import { Controller, Get } from '@nestjs/common';

@Controller('pets')
export class PetsController {
  constructor(private ps: PetsService) {}

  @Get()
  async getAllPets() {
    return await this.ps.getAllPets();
  }
}
