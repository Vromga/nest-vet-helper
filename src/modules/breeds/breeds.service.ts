import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IBreed } from './interface/breed.interface';
import { Model } from 'mongoose';

@Injectable()
export class BreedsService {
  constructor(@InjectModel('breed') private bs: Model<IBreed>) {}
  async getAll() {
    return this.bs.find();
  }
}
