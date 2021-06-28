import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { ChangeRoleDto, CreateRoleDto } from './dto/role.dto';

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Put(':id')
  async change(@Param('id') id: string, @Body() changeRoleDto: ChangeRoleDto) {
    return this.roleService.change(id, changeRoleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.roleService.delete(id);
  }

  @Get()
  async getAll() {
    return this.roleService.getAll();
  }
}
