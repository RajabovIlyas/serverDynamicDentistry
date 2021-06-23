import { Injectable } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/document-type.dto';
import { IDocumentType } from './interfaces/document-type.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DocumentTypeService {
  constructor(
    @InjectModel('DocumentType')
    private readonly documentTypeModel: Model<IDocumentType>,
  ) {}

  async create(
    createDocumentTypeDto: CreateDocumentTypeDto,
  ): Promise<IDocumentType> {
    return this.documentTypeModel.create(createDocumentTypeDto);
  }

  async change(
    id: string,
    createDocumentTypeDto: CreateDocumentTypeDto,
  ): Promise<IDocumentType> {
    return this.documentTypeModel.findByIdAndUpdate(id, createDocumentTypeDto);
  }

  async delete(id: string): Promise<IDocumentType> {
    return this.documentTypeModel.findByIdAndDelete(id);
  }

  async getAll(): Promise<IDocumentType | {}> {
    return this.documentTypeModel
      .find()
      .populate({ path: 'legacy.directory' })
      .exec();
  }
}
