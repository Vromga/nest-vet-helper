import { Document } from 'mongoose';
export interface IBreed extends Document {
  name: string;
  breed: string[];
}
