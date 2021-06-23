import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DocumentDataService } from './document-data.service';
import { CreateDocumentDataDto } from './dto/document-data.dto';

@ApiTags('document-data')
@Controller('document-data')
export class DocumentDataController {
  constructor(private readonly documentDataService: DocumentDataService) {}

  @Post()
  async create(@Body() createDocumentDataDto: CreateDocumentDataDto) {
    return this.documentDataService.create(createDocumentDataDto);
  }

  @Put(':id')
  async change(
    @Param('id') id: string,
    @Body() createDocumentDataDto: CreateDocumentDataDto,
  ) {
    return this.documentDataService.change(id, createDocumentDataDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.documentDataService.delete(id);
  }

  @Get()
  async getAll() {
    return this.documentDataService.getAll();
  }
}
