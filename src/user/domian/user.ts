import { Aggregate } from '../../common/domain/aggregate';
import { UserId } from './userId';

export class User extends Aggregate<UserId> {
  constructor(
    readonly id: UserId,
    private name: string,
    private email: string,
    private password: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    super(id, createdAt, updatedAt, deletedAt);
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create(param: { name: string; email: string; password: string }) {
    const { name, email, password } = param;
    const newId = new UserId(null);
    return new User(newId, name, email, password, new Date(), new Date(), null);
  }
  getName(): string {
    return this.name;
  }
  getEmail(): string {
    return this.email;
  }
  getPassWord(): string {
    return this.password;
  }
}
