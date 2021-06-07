import { Document } from 'mongoose';
import { IRole } from 'src/role/interfaces/role.interface';

export interface IRoleUser {
  dateStart: Date;
  role: [IRole];
  dateEnd: Date | null;
}


export interface IUser extends Document {
  readonly email: string;
  readonly avatar: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly password: string;
  readonly role: [IRoleUser];
}
