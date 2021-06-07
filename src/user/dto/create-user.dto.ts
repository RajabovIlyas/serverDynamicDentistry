import { IRoleUser } from '../interfaces/user.interface';

export class CreateUserDto {
  readonly email: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly password: string;
  readonly role: IRoleUser;
}
