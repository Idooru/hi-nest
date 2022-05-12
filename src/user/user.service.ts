import { Injectable } from '@nestjs/common';

@Injectable()
class UserService {
  getUser(): string {
    return 'Hello User';
  }
}

export { UserService };
