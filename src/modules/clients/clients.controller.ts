import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { IClient } from './interface/client.interface';

@Controller('clients')
export class ClientsController {
  constructor(private cs: ClientsService) {}

  @Get()
  async getAllClients(): Promise<IClient[]> {
    return await this.cs.getAll();
  }
}
