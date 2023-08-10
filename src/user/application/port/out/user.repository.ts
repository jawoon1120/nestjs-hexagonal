import { User } from 'src/user/domian/user';
import { UserId } from 'src/user/domian/userId';

export interface UserRepository {
  saveUser: (user: User) => Promise<UserId>;
}
