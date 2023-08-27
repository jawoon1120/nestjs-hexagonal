import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { User } from '../../../domian/user';
import { UserId } from '../../../domian/userId';
import { EntityMapper } from '../../../../common/adapter/persistence/entity-mapper';

@Injectable()
export class UserEntityMapper extends EntityMapper<UserId> {
  toAggregate(entity: UserEntity): User {
    const { id, name, email, hashedPassword, createdAt, updatedAt, deletedAt } =
      entity;

    return new User(
      new UserId(id),
      name,
      email,
      hashedPassword,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }

  toEntity(aggregate: User): UserEntity {
    const entity = new UserEntity();
    entity.id = aggregate.id.key;
    entity.name = aggregate.getName();
    entity.email = aggregate.getEmail();
    entity.hashedPassword = aggregate.getPassWord();
    return entity;
  }
}
