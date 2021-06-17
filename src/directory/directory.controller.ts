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
import { constData } from './constData/typeData';
import { DirectoryService } from './directory.service';
import { CreateDirectoryDto } from './dto/directory.dto';

@ApiTags('directory')
@Controller('directory')
export class DirectoryController {
  constructor(private readonly directoryService: DirectoryService) {}

  @Post()
  async create(@Body() createDirectoryDto: CreateDirectoryDto) {
    return this.directoryService.create(createDirectoryDto);
  }

  @Put(':id')
  async change(
    @Param('id') id: string,
    @Body() createDirectoryDto: CreateDirectoryDto,
  ) {
    return this.directoryService.change(id, createDirectoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.directoryService.delete(id);
  }

  @Get()
  async getAll() {
    return this.directoryService.getAll();
  }

  @Get('/type')
  async getType() {
    return constData;
  }
}
