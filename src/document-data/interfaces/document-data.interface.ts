import { Document } from 'mongoose';
import { IUser } from '../../user/interfaces/user.interface';

export interface IDataDirectory {
  readonly directory: string;
  readonly nameDirectory: string;
  readonly data: IData[];
}

export interface IData {
  readonly name: string;
  readonly value: string;
}

export interface IDocumentData extends Document {
  readonly documentType: string;
  readonly name: string;
  readonly status: string;
  readonly user: IUser | string;
  readonly data: IData[];
  readonly dataDirectory: IDataDirectory[];
}
