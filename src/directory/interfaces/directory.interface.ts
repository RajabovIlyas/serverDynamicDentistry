import { Document } from 'mongoose';

export interface IDirectory extends Document {
  readonly name: string;
  readonly fields: [string];
}
