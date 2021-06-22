import { IRoleAccess } from 'src/role-access/interfaces/role-access.interface';

export class CreateRoleDto {
  readonly name: string;
  readonly roleComposition: IRoleAccess[];
}
