import { Document } from 'mongoose';


export interface IRoleAccess extends Document {
  readonly name: string;
  readonly keyName: string;
}
