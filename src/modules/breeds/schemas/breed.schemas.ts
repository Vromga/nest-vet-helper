import { Schema } from 'mongoose';

const BreedSchemas = new Schema({
  name: { type: String },
  breed: { type: Array },
});

export default BreedSchemas;
