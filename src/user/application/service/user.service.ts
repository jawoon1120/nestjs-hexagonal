import { Injectable, Inject } from '@nestjs/common';
import { UserUserCaseInPort } from '../port/in/user-usecase.port';
import { UserPersistenceAdapter } from '../../adapter/out/database/user-persistence.adapter';
import { UserPersistenceOutPort } from '../port/out/user-persistence.port';
import {
  UserCreateReqDTO,
  UserCreateResDTO,
} from '../../adapter/in/web/dto/createUser.dto';
import { User } from '../../domian/user';

@Injectable()
export class UserService implements UserUserCaseInPort {
  constructor(
    @Inject(UserPersistenceAdapter)
    private readonly userPersistenceAdapter: UserPersistenceOutPort,
  ) {}

  async signup(userCreateReqData: UserCreateReqDTO): Promise<UserCreateResDTO> {
    const { email, password, name } = userCreateReqData;
    const savedUser = await this.userPersistenceAdapter.saveUser(
      User.create({ name, email, password }),
    );
    return new UserCreateResDTO(savedUser.id.key);
  }
}
