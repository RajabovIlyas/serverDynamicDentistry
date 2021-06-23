import { Module } from '@nestjs/common';
import { DocumentDataService } from './document-data.service';
import { DocumentDataController } from './document-data.controller';
import { DocumentDataSchema } from './schemas/document-data.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DocumentData', schema: DocumentDataSchema },
    ]),
  ],
  providers: [DocumentDataService],
  controllers: [DocumentDataController],
  exports: [DocumentDataService],
})
export class DocumentDataModule {}
