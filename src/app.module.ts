import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true})],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class AppModule {}
