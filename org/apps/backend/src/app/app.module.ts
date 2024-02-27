import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, AppService, UserService, PostService],
})
export class AppModule {}
