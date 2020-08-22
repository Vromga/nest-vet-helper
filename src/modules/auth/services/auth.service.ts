import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAdmin, IAadminToResponce } from '../interface/admin.interface';
import { adminDTO } from '../DTO/admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private JwtService: JwtService,
    @InjectModel('admin') private as: Model<IAdmin>,
  ) {}

  async validateAdmin(
    login: string,
    pass: string,
  ): Promise<IAadminToResponce | null> {
    const admin: IAdmin = await this.as.findOne({ login });

    if (admin && (await bcrypt.compare(pass, admin.passwordHash))) {
      const { login, _id, created_at, updated_at, nickName } = admin;
      return {
        login,
        _id,
        created_at,
        updated_at,
        nickName,
      };
    }
    return null;
  }

  async login(admin: IAdmin) {
    const payload = { id: admin._id };
    return {
      accessToken: this.JwtService.sign(payload),
    };
  }

  async findById(id: string): Promise<IAdmin | undefined> {
    return this.as.findById({ _id: id });
  }

  async createAdmin(admin: adminDTO): Promise<IAdmin> {
    const newAdmin = new this.as({ ...admin });
    return newAdmin.save();
  }
}
