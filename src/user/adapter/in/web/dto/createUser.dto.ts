import { IsString } from 'class-validator';

export class UserCreateReqDTO {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;
}

export class UserCreateResDTO {
  constructor(userId: number) {
    this.userId = userId;
  }
  @IsString()
  userId: number;
}
