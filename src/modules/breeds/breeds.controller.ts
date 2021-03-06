import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { IBreed } from './interface/breed.interface';
import { BreedDTO } from './DTO/breed.dto';

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

  @Post()
  async createNewCollectin(@Body() breedCollection: BreedDTO): Promise<IBreed> {
    return this.bs.creeteBreedCollection(breedCollection);
  }

  @Patch('/:name')
  async addNewBreedInCollection(
    @Param('name') name: string,
    @Body('breed') breed: string,
  ): Promise<IBreed> {
    return await this.bs.addNewBreedInCollection(name, breed);
  }

  @Delete('/:name')
  async deleteCollection(@Param('name') name: string): Promise<IBreed> {
    return await this.bs.deleteCollection(name);
  }

  @Put('/:name')
  async deleteBreedFromCollection(
    @Param('name') name: string,
    @Query('breed') breed: string,
  ): Promise<IBreed> {
    return await this.bs.deleteBreedFromCollection(name, breed);
  }
}
