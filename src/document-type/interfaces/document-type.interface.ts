import { Document } from 'mongoose';

export interface IDocumentType extends Document {
  readonly name: string;
  readonly keyName: string;
  readonly fields: [string];
}
