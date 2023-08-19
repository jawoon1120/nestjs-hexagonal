import { Module } from '@nestjs/common';
import { UserController } from './adapter/in/web/user.controller';
import { UserService } from './application/service/user.service';
import { UserPersistenceAdapter } from './adapter/out/database/user-persistence.adapter';
import { UserEntityMapper } from './adapter/out/database/user.entity-mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './adapter/out/database/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserPersistenceAdapter, UserEntityMapper],
})
export class UserModule {}
