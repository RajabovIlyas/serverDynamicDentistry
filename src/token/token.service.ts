import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserToken } from './interfaces/user-token.interface';
import { CreateUserTokenDto } from './dto/create-user-token.dto';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<IUserToken>,
  ) {}

  async create(createUserTokenDto: CreateUserTokenDto): Promise<IUserToken> {
    await this.tokenModel.findOneAndDelete({
      user: createUserTokenDto.user,
    });
    const userToken = new this.tokenModel(createUserTokenDto);
    return await userToken.save();
  }

  async delete(token: string): Promise<boolean> {
    return this.tokenModel.deleteOne({ token }) ? true : false;
  }

  async deleteAll(user: string): Promise<{ ok?: number; n?: number }> {
    return this.tokenModel.deleteMany({ user });
  }

  async findOne(token: string): Promise<IUserToken> {
    return await this.tokenModel.findOne({ token }).exec();
  }
}
