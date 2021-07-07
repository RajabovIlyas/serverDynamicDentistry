import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExecutionProcessDto } from './dto/execution-process.dto';
import { IExecutionProcess } from './interfaces/execution-process.interface';
import { IDocumentData } from '../document-data/interfaces/document-data.interface';

@Injectable()
export class ExecutionProcessService {
  constructor(
    @InjectModel('ExecutionProcess')
    private readonly executionProcessModel: Model<IExecutionProcess>,
  ) {}

  async create(
    createExecutionProcessDto: CreateExecutionProcessDto,
  ): Promise<IExecutionProcess> {
    return this.executionProcessModel.create(createExecutionProcessDto);
  }

  async getAll(): Promise<IDocumentData | {}> {
    return this.executionProcessModel
      .find()
      .populate({ path: 'process.role' })
      .exec();
  }
}
