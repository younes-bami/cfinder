import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';

@Injectable()
export class BookingsService {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>) {}

  async createBooking(createBookingDto: any): Promise<Booking> {
    const createdBooking = new this.bookingModel(createBookingDto);
    return createdBooking.save();
  }

  async getBookingsForUser(userId: string): Promise<Booking[]> {
    return this.bookingModel.find({ athleteId: userId }).exec();
  }

  async getBookingsForCoach(coachId: string): Promise<Booking[]> {
    return this.bookingModel.find({ coachId }).exec();
  }
}
