import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { PrismaService } from '@src/prisma/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController]
})
export class UsersModule {}
