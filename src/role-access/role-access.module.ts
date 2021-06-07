import { Module } from '@nestjs/common';
import { RoleAccessService } from './role-access.service';
import { RoleAccessController } from './role-access.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleAccessSchema } from './schemas/role.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RoleAccess', schema: RoleAccessSchema },
    ]),
  ],
  providers: [RoleAccessService],
  controllers: [RoleAccessController],
  exports: [RoleAccessService],
})
export class RoleAccessModule {}
