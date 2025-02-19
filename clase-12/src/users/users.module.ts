import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserModel , userSchema } from './schemas/users.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: userSchema
      }
    ]),
  ConfigModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
