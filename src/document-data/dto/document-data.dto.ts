import { IData, IDataDirectory } from '../interfaces/document-data.interface';

export class CreateDocumentDataDto {
  readonly name: string;
  readonly user: string;
  readonly data: IData[];
  readonly dataDirectory: IDataDirectory[];
}
