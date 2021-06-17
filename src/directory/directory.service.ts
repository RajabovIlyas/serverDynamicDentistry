import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDirectoryDto } from './dto/directory.dto';
import { IDirectory } from './interfaces/directory.interface';

@Injectable()
export class DirectoryService {
  constructor(
    @InjectModel('Directory')
    private readonly directoryModel: Model<IDirectory>,
  ) {}

  async create(createDirectoryDto: CreateDirectoryDto): Promise<IDirectory> {
    return this.directoryModel.create(createDirectoryDto);
  }

  async change(
    id: string,
    createDirectoryDto: CreateDirectoryDto,
  ): Promise<IDirectory> {
    return this.directoryModel.findByIdAndUpdate(id, createDirectoryDto);
  }

  async delete(id: string): Promise<IDirectory> {
    return this.directoryModel.findByIdAndDelete(id);
  }

  async getAll(): Promise<IDirectory | {}> {
    return this.directoryModel.find().populate({ path: 'legacy' }).exec();
  }
}
