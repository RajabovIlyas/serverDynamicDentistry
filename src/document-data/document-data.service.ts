import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateDocumentDataDto,
  GetDocumentDataForUserDto,
} from './dto/document-data.dto';
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
    const cutDate = (value) => {
      if (!Number.isNaN(Date.parse(value.value))) {
        return { ...value, value: value.value.substr(0, 10) };
      } else {
        return value;
      }
    };
    const data = await createDocumentDataDto.data.map(cutDate);
    const dataDirectory = createDocumentDataDto.dataDirectory.map((value) => {
      return { ...value, data: value.data.map(cutDate) };
    });

    return this.documentDataModel.create({
      ...createDocumentDataDto,
      data,
      dataDirectory,
    });
  }

  async change(
    id: string,
    createDocumentDataDto: CreateDocumentDataDto,
  ): Promise<IDocumentData | {}> {
    return this.documentDataModel.findByIdAndUpdate(id, createDocumentDataDto);
  }

  async delete(id: string): Promise<IDocumentData> {
    return this.documentDataModel.findByIdAndDelete(id);
  }

  async getByType({ idType, idUser }): Promise<IDocumentData | {}> {
    return this.documentDataModel.find({ user: idUser, documentType: idType });
  }

  async getByUserForBusinessProcess({
    idUser,
  }): Promise<GetDocumentDataForUserDto | {}> {
    return this.documentDataModel
      .find({ user: idUser })
      .populate({ path: 'user' })
      .exec()
      .then((result) => {
        return result.map((value) => {
          return new GetDocumentDataForUserDto(value);
        });
      });
  }

  async getAll(): Promise<IDocumentData | {}> {
    return this.documentDataModel.find().populate({ path: 'user' }).exec();
  }
}
