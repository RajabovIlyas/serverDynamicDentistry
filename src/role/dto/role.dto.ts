import { IRoleAccess } from 'src/role-access/interfaces/role-access.interface';
import { IDocumentType } from '../../document-type/interfaces/document-type.interface';

export class CreateRoleDto {
  readonly name: string;
  readonly roleAccess: string[];
  readonly documentAccess: string[];
}

export class ChangeRoleDto {
  readonly name: string;
  readonly roleAccess: IRoleAccess[];
  readonly documentAccess: IDocumentType[];
}
