import { Document } from 'mongoose';
import { IRole } from '../../role/interfaces/role.interface';

export interface IExecutionProcess extends Document {
  process: {
    role: string | IRole;
    name: string;
  }[];
}
