import { Module } from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeController } from './document-type.controller';
import { DocumentTypeSchema } from './schemas/document-type.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DocumentType', schema: DocumentTypeSchema },
    ]),
  ],
  providers: [DocumentTypeService],
  controllers: [DocumentTypeController],
  exports: [DocumentTypeService],
})
export class DocumentTypeModule {}
