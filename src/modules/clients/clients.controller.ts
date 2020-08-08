import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { IClient } from './interface/client.interface';
import { ClientDTO } from './DTO/client.dto';

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
}
