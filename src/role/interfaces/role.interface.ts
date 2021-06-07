import { Document } from 'mongoose';

export interface IRoleComposition {
  readonly name: string;
  readonly document: [string];
}

export interface IRole extends Document {
  readonly name: string;
  readonly roleComposition: [IRoleComposition];
}
