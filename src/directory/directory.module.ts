import { Module } from '@nestjs/common';
import { DirectoryService } from './directory.service';
import { DirectoryController } from './directory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DirectorySchema } from './schemas/directory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Directory', schema: DirectorySchema }]),
  ],
  providers: [DirectoryService],
  controllers: [DirectoryController],
  exports: [DirectoryService],
})
export class DirectoryModule {}
