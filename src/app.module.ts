import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { configModule } from './configure.root';
import { RoleModule } from './role/role.module';
import { RoleAccessModule } from './role-access/role-access.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { DirectoryModule } from './directory/directory.module';
import { DocumentDataModule } from './document-data/document-data.module';
import { ExecutionProcessModule } from './execution-process/execution-process.module';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MorganModule,
    MongooseModule.forRoot(process.env.MONGO_URL_V2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TokenModule,
    RoleModule,
    RoleAccessModule,
    DocumentTypeModule,
    DirectoryModule,
    DocumentDataModule,
    ExecutionProcessModule,
  ],
  // providers: [
  //   {
  //     provide: APP_INTERCEPTOR,
  //     useClass: MorganInterceptor('combined'),
  //   },
  // ],
})
export class AppModule {}
