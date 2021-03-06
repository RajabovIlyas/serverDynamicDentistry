import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRole } from './interfaces/role.interface';
import { ChangeRoleDto, CreateRoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel('Role') private readonly roleModel: Model<IRole>) {}

  async create(createRoleDto: CreateRoleDto): Promise<IRole> {
    return this.roleModel.create(createRoleDto);
  }

  async change(id: string, changeRoleDto: ChangeRoleDto): Promise<IRole> {
    return this.roleModel.findByIdAndUpdate(id, changeRoleDto);
  }

  async delete(id: string): Promise<IRole> {
    return this.roleModel.findByIdAndDelete(id);
  }

  async getAll(): Promise<IRole | {}> {
    return this.roleModel.find().populate({ path: 'roleAccess' }).exec();
  }
}
