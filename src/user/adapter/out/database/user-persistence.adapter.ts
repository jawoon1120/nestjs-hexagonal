import { InjectRepository } from '@nestjs/typeorm';
import { UserPersistenceOutPort } from '../../../application/port/out/user-persistence.port';
import { User } from '../../../domian/user';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserEntityMapper } from './user.entity-mapper';

export class UserPersistenceAdapter implements UserPersistenceOutPort {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userEntityMapper: UserEntityMapper,
  ) {}

  async saveUser(user: User): Promise<User> {
    const userEntity = this.userEntityMapper.toEntity(user);
    const savedUserEntity = await this.userRepository.save(userEntity);
    const savedUser = this.userEntityMapper.toAggregate(savedUserEntity);
    return savedUser;
  }
}
