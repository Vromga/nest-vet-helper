import { Document } from 'mongoose';

export interface IPets extends Document {
  ownerId: string;
  name: string;
  age: string;
  kindOfAnimal: string;
  breed: string;
  color: string;
  chipNumber: string;
  gender: string;
  weightAnimal: number;
  description: string;
  isLive: boolean;
}
