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
import { ClientsService } from './clients.service';
import { IClient } from './interface/client.interface';
import { ClientDTO } from './DTO/client.dto';
import { ClientDescriptionOnlyDTO } from './DTO/clientDescriptionOnly.dto';

@Controller('clients')
export class ClientsController {
  constructor(private cs: ClientsService) {}

  @Get()
  async getAllClients(): Promise<IClient[]> {
    return await this.cs.getAll();
  }

  @Get('/:id')
  async getClientByID(@Param('id') id: string): Promise<IClient> {
    return await this.cs.getByID(id);
  }

  @Post()
  async createClient(@Body() clientDto: ClientDTO): Promise<IClient> {
    return await this.cs.createClient(clientDto);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: string) {
    return this.cs.deleteClient(id);
  }

  @Patch('/:id')
  async updateClientDescription(
    @Param('id') id: string,
    @Body() clientDTO: ClientDescriptionOnlyDTO,
  ) {
    return this.cs.patchClient(id, clientDTO);
  }

  @Put('/:id')
  async updateClient(
    @Param('id') id: string,
    @Body() clientDTO: ClientDTO,
  ): Promise<IClient> {
    console.log('work');
    return this.cs.putClient(id, clientDTO);
  }
}
