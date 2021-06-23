import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDocumentDataDto } from './dto/document-data.dto';
import { IDocumentData } from './interfaces/document-data.interface';

@Injectable()
export class DocumentDataService {
  constructor(
    @InjectModel('DocumentData')
    private readonly documentDataModel: Model<IDocumentData>,
  ) {}

  async create(
    createDocumentDataDto: CreateDocumentDataDto,
  ): Promise<IDocumentData> {
    return this.documentDataModel.create(createDocumentDataDto);
  }

  async change(
    id: string,
    createDocumentDataDto: CreateDocumentDataDto,
  ): Promise<IDocumentData> {
    return this.documentDataModel.findByIdAndUpdate(id, createDocumentDataDto);
  }

  async delete(id: string): Promise<IDocumentData> {
    return this.documentDataModel.findByIdAndDelete(id);
  }

  async getAll(): Promise<IDocumentData | {}> {
    return this.documentDataModel.find().exec();
  }
}
