import { User } from 'src/user/domian/user';

export interface UserPersistenceOutPort {
  saveUser: (user: User) => Promise<User>;
}
