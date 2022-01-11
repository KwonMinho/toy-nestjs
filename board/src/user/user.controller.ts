import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('profile')
  findAll(): string {
    return 'This action returns all cats';
  }
}
