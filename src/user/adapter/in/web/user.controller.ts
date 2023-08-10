import { Controller, Inject, Post, Body } from '@nestjs/common';
import { UserUserCase } from 'src/user/application/port/in/user.usecase';
import { UserService } from 'src/user/application/service/user.service';
import { UserCreateReqDTO } from './dto/createUser.dto';

@Controller('api/v1/user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserUserCase,
  ) {}

  @Post()
  async signUp(@Body() signUpData: UserCreateReqDTO) {
    const signUpResponse = await this.userService.signup(signUpData);
    return signUpResponse;
  }
}
