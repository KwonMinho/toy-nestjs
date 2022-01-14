import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])], //forFeature: 모듈 내에서 사용
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
