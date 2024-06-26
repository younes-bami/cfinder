import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CoachesModule } from './coaches/coaches.module';
import { BookingsModule } from './bookings/bookings.module';

Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/sports-coaching-app'),
    UsersModule,
    CoachesModule,
    BookingsModule,
  ],
})
export class AppModule {}