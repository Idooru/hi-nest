import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }
}

export { UserController };
