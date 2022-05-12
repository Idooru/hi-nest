import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }

  JSON(): object {
    return { message: 'Hello NestJS' };
  }
}

export { AppService };
