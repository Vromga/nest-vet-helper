import { Schema } from 'mongoose';

const PetsSchemas = new Schema({
  ownerId: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  kindOfAnimal: { type: String, required: true },
  breed: { type: String, required: true },
  color: { type: String, required: true },
  chipNumber: { type: String, required: false },
  gender: { type: String, required: true },
  weightAnimal: { type: Number, required: false },
  description: { type: String, required: false },
  isLive: { type: Boolean, required: true },
});

export default PetsSchemas;
