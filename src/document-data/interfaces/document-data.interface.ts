import { Document } from 'mongoose';

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
  readonly name: string;
  readonly user: string;
  readonly data: IData[];
  readonly dataDirectory: IDataDirectory[];
}
