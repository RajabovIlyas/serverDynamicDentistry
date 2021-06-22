import { IField, ILegacy } from '../interfaces/document-type.interface';

export class CreateDocumentTypeDto {
  readonly name: string;
  readonly fields: IField[];
  readonly legacy: ILegacy[];
}
