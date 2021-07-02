import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, Request, UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DocumentDataService } from './document-data.service';
import { CreateDocumentDataDto } from './dto/document-data.dto';
import { AuthGuard } from '@nestjs/passport';

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

  @UseGuards(AuthGuard('jwt'))
  @Get('by-document-type/:id')
  async getByType(@Param('id') id: string, @Request() req) {
    return this.documentDataService.getByType({
      idType: id,
      idUser: req.userId,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('business-process')
  async getForBusinessProcess(@Request() req) {
    return this.documentDataService.getByUserForBusinessProcess({
      idUser: req.userId,
    });
  }

  @Get()
  async getAll() {
    return this.documentDataService.getAll();
  }
}
