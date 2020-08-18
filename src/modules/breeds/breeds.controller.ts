import { Controller, Get, Param } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { IBreed } from './interface/breed.interface';

@Controller('breeds')
export class BreedsController {
  constructor(private bs: BreedsService) {}
  @Get()
  async getAll(): Promise<IBreed[]> {
    return await this.bs.getAll();
  }

  @Get('/:name')
  async getByName(@Param('name') name: string): Promise<IBreed> {
    return await this.bs.getByName(name);
  }
}
