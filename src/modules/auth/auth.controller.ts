import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { adminDTO } from '../auth/DTO/admin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  async refresh(@Request() req) {
    const admin = await this.authService.findById(req.user.id);
    return this.authService.login(admin);
  }

  @Post('registration')
  async createAdmin(@Body() adminDto: adminDTO) {
    return await this.authService.createAdmin(adminDto);
  }
}
