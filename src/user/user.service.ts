import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    console.log('createUserDto', createUserDto);
    return this.userModel.create(createUserDto);
  }

  async find(id: string): Promise<IUser> {
    return this.userModel.findById(id).exec();
  }

  async getByEmail(email: string): Promise<IUser> {
    return this.userModel.findOne({ email }).select('password').exec();
  }

  async getAuthMe(id: string): Promise<IUser> {
    return this.userModel
      .findById(id)
      .populate({
        path: 'role.role',
        populate: { path: 'roleComposition.roleaccess' },
      })
      .exec();
  }

  async getAll(): Promise<IUser | {}> {
    return this.userModel
      .find()
      .populate({
        path: 'role.role',
      })
      .exec();
  }
}