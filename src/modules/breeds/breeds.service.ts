import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IBreed } from './interface/breed.interface';
import { Model } from 'mongoose';
import { BreedDTO } from './DTO/breed.dto';

@Injectable()
export class BreedsService {
  constructor(@InjectModel('breed') private bs: Model<IBreed>) {}
  async getAll() {
    return await this.bs.find();
  }

  async getByName(name: string): Promise<IBreed> {
    return await this.bs.findOne({ name });
  }

  async creeteBreedCollection(breedCollection: BreedDTO): Promise<IBreed> {
    const newBreedCollection = new this.bs(breedCollection);
    return await newBreedCollection.save();
  }

  async addNewBreedInCollection(
    nameCollectionBreed: string,
    newBreed: string,
  ): Promise<IBreed> {
    return await this.bs.findOneAndUpdate(
      { name: nameCollectionBreed },
      { $push: { breed: newBreed } },
      { new: true },
    );
  }

  async deleteCollection(name: string): Promise<IBreed> {
    return this.bs.findOneAndDelete({ name });
  }

  async deleteBreedFromCollection(
    name: string,
    breed: string,
  ): Promise<IBreed> {
    return await this.bs.findOneAndUpdate(
      { name },
      { $pull: { breed } },
      { new: true },
    );
  }
}
