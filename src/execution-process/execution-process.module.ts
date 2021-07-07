import { Module } from '@nestjs/common';
import { ExecutionProcessService } from './execution-process.service';
import { ExecutionProcessController } from './execution-process.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExecutionProcessSchema } from './schemas/execution-process.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ExecutionProcess', schema: ExecutionProcessSchema },
    ]),
  ],
  providers: [ExecutionProcessService],
  controllers: [ExecutionProcessController],
  exports:[ExecutionProcessService]
})
export class ExecutionProcessModule {}
