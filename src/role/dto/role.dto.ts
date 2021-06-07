import { IRoleComposition } from '../interfaces/role.interface';

export class CreateRoleDto {
  readonly name: string;
  readonly roleComposition: [IRoleComposition];
}
