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
import { constData } from './constData/typeData';
import { DocumentTypeService } from './document-type.service';
import { CreateDocumentTypeDto } from './dto/document-type.dto';

@ApiTags('document-type')
@Controller('document-type')
export class DocumentTypeController {
  constructor(private readonly documentTypeService: DocumentTypeService) {}

  @Post()
  async create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    return this.documentTypeService.create(createDocumentTypeDto);
  }

  @Put(':id')
  async change(
    @Param('id') id: string,
    @Body() createRoleAccessDto: CreateDocumentTypeDto,
  ) {
    return this.documentTypeService.change(id, createRoleAccessDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log('ilyas', id);
    return this.documentTypeService.delete(id);
  }

  @Get()
  async getAll() {
    return this.documentTypeService.getAll();
  }


  @Get('/type')
  async getType(){
    return constData;
  }
}
