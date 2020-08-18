import { Controller, Get } from '@nestjs/common';
import { BreedsService } from './breeds.service';

@Controller('breeds')
export class BreedsController {
  constructor(private bs: BreedsService) {}
  @Get()
  async getAll() {
    return this.bs.getAll();
  }
}
