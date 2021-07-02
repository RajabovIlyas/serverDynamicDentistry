import {
  IData,
  IDataDirectory,
  IDocumentData,
} from '../interfaces/document-data.interface';

export class CreateDocumentDataDto {
  readonly documentType: string;
  readonly user: string;
  readonly data: IData[];
  readonly dataDirectory: IDataDirectory[];
}

export class GetDocumentDataForUserDto {
  readonly id: string;
  readonly fio: string;
  readonly documentName: string;
  readonly status: string;

  constructor(documentData: IDocumentData) {
    this.id = documentData._id;
    if (typeof documentData.user !== 'string') {
      this.fio =
        documentData.user?.firstName + ' ' + documentData.user?.lastName;
    }
    this.documentName = documentData.name;
    this.status = documentData.status;
  }
}
