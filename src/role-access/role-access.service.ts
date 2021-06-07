import { IRoleAccess } from './interfaces/role-access.interface';
import { Injectable } from '@nestjs/common';
import { CreateRoleAccessDto } from './dto/role-access.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoleAccessService {
  constructor(
    @InjectModel('RoleAccess')
    private readonly roleAccessModel: Model<IRoleAccess>,
  ) {}

  async create(createRoleAccessDto: CreateRoleAccessDto): Promise<IRoleAccess> {
    return this.roleAccessModel.create(createRoleAccessDto);
  }

  async change(
    id: string,
    createRoleAccessDto: CreateRoleAccessDto,
  ): Promise<IRoleAccess> {
    return this.roleAccessModel.findByIdAndUpdate(id, createRoleAccessDto);
  }

  async delete(id: string): Promise<IRoleAccess> {
    return this.roleAccessModel.findByIdAndDelete(id);
  }

  async getAll(): Promise<IRoleAccess | {}> {
    return this.roleAccessModel.find().exec();
  }
}
