import { IRoleAccess } from './../../role-access/interfaces/role-access.interface';
import { Document } from 'mongoose';

export interface IRole extends Document {
  readonly name: string;
  readonly roleaccess: IRoleAccess[];
}
