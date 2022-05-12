import { Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

interface JSON {
  message: string;
  params: string;
}

@Injectable()
class UserService {
  async findOne(@Req() req: Request, @Res() res: Response): Promise<string[]> {
    const { id } = req.params;
    const responseResult: JSON = {
      message: 'Hello',
      params: id,
    };
    res.status(201).json(responseResult);
    return ['hello'];
  }

  getUser(): string {
    return 'Hello User';
  }
}

export { UserService };
