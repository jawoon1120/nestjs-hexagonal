import { Controller, Inject, Post, Body } from '@nestjs/common';
import { UserUserCaseInPort } from 'src/user/application/port/in/user-usecase.port';
import { UserService } from 'src/user/application/service/user.service';
import { UserCreateReqDTO } from './dto/createUser.dto';

@Controller('api/v1/user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserUserCaseInPort,
  ) {}

  @Post()
  async signUp(@Body() signUpData: UserCreateReqDTO) {
    const signUpResponse = await this.userService.signup(signUpData);
    return signUpResponse;
  }
}
