import { Injectable } from '@nestjs/common';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
  ) {}

  signup(signupAuthDto: SignupAuthDto) {
      return this.userService.create(signupAuthDto);
  }
  signin(signinAuthDto: SigninAuthDto) {
    return 'This action adds a new auth';
  }
}
