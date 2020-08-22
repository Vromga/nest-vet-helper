import { Document, Types } from 'mongoose';

export interface IAdmin extends Document {
  _id: Types.ObjectId;
  login: string;
  passwordHash?: string;
  nickName: string;
  created_at: Date;
  updated_at?: Date;
  salt?: string;
}

export interface IAadminToResponce {
  _id: Types.ObjectId;
  login: string;
  nickName: string;
  created_at: Date;
  updated_at?: Date;
}
