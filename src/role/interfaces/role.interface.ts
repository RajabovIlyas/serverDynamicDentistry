import { IRoleAccess } from './../../role-access/interfaces/role-access.interface';
import { Document } from 'mongoose';
import { IDocumentType } from '../../document-type/interfaces/document-type.interface';

export interface IRole extends Document {
  readonly name: string;
  readonly roleAccess: IRoleAccess[];
  readonly documentAccess: IDocumentType[];
}
