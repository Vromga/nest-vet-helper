// import { Schema } from 'mongoose';
// import { IAdmin } from '../interface/admin.interface';

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAdmin } from '../interface/admin.interface';
// const AdminSchema = new Schema({
//   login: { type: String, required: true },
//   passwordHash: { type: String, required: true },
//   nickName: { type: String, required: true },
//   created_at: Date,
//   updated_at: Date,
// });

// export default AdminSchema;
@Schema()
export class Admin extends Document {
  @Prop()
  login: string;

  @Prop()
  passwordHash: string;

  @Prop()
  nickName: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  salt: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

AdminSchema.statics.toResponse = (admin: IAdmin) => {
  const { _id, login, nickName, created_at, updated_at } = admin;
  return { _id, login, nickName, created_at, updated_at };
};
