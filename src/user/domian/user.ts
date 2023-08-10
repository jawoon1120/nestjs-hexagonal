export class User {
  constructor(
    id: number,
    private name: string,
    private email: string,
    private password: string,
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create(param: {
    id: number;
    name: string;
    email: string;
    password: string;
  }) {
    const { id, name, email, password } = param;
    return new User(id, name, email, password);
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
