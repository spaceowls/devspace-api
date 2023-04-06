import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule],
})
export class AppModule {}
