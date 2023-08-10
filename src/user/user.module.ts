import { Module } from '@nestjs/common';
import { UserController } from './adapter/in/web/user.controller';
import { UserService } from './application/service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
