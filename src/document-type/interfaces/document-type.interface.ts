import { IDirectory } from './../../directory/interfaces/directory.interface';
import { Document } from 'mongoose';
import { documentTypeEnum } from '../enums/document-type.enum';

export interface ILegacy {
  name: string;
  directory: IDirectory;
}
export interface IField {
  name: string;
  type: documentTypeEnum;
}
export interface IDocumentType extends Document {
  readonly name: string;
  readonly fields: IField[];
  readonly legacy: ILegacy[];
}
