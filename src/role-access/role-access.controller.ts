import {
  Body,
  Post,
  Put,
  Get,
  Delete,
  Param,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleAccessDto } from './dto/role-access.dto';
import { RoleAccessService } from './role-access.service';

@ApiTags('role-access')
@Controller('role-access')
export class RoleAccessController {
  constructor(private readonly roleAccessService: RoleAccessService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleAccessDto) {
    return this.roleAccessService.create(createRoleDto);
  }

  @Put(':id')
  async change(
    @Param('id') id: string,
    @Body() createRoleAccessDto: CreateRoleAccessDto,
  ) {
    return this.roleAccessService.change(id, createRoleAccessDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log('ilyas', id);
    return this.roleAccessService.delete(id);
  }

  @Get()
  async getAll() {
    return this.roleAccessService.getAll();
  }
}
