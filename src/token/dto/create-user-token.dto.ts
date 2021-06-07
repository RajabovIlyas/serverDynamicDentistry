import { IsString } from 'class-validator';
import * as mongoose from 'mongoose';

export class CreateUserTokenDto {
  @IsString()
  token: string;
  @IsString()
  user: string;
}
