import {
  UserCreateReqDTO,
  UserCreateResDTO,
} from 'src/user/adapter/in/web/dto/createUser.dto';

export interface UserUserCase {
  signup(userCreateReqData: UserCreateReqDTO): Promise<UserCreateResDTO>;
}
