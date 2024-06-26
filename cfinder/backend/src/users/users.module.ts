import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // Remplacez par votre clé secrète
      signOptions: { expiresIn: '60m' }, // Durée de validité du token
    }),
  ],
  providers: [UsersService, AuthService, JwtStrategy],
  controllers: [UsersController],
  exports: [UsersService, AuthService],
})
export class UsersModule {}
