import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('user')
class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getuser')
  getUser(): string {
    return this.userService.getUser();
  }

  @Get(':id')
  findOne(@Req() req: Request, @Res() res: Response): Promise<any> {
    return this.userService.findOne(req, res);
  }
}

export { UserController };
