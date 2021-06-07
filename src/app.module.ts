import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { configModule } from './configure.root';
import { RoleModule } from './role/role.module';
import { RoleAccessModule } from './role-access/role-access.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(process.env.MONGO_URL_V2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TokenModule,
    RoleModule,
    RoleAccessModule,
  ],
})
export class AppModule {}
