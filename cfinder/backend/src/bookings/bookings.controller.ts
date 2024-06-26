import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@ApiTags('bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({ status: 201, description: 'Booking created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.createBooking(createBookingDto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get bookings for a user' })
  @ApiResponse({ status: 200, description: 'Bookings retrieved successfully.' })
  async getBookingsForUser(@Param('userId') userId: string) {
    return this.bookingsService.getBookingsForUser(userId);
  }

  @Get('coach/:coachId')
  @ApiOperation({ summary: 'Get bookings for a coach' })
  @ApiResponse({ status: 200, description: 'Bookings retrieved successfully.' })
  async getBookingsForCoach(@Param('coachId') coachId: string) {
    return this.bookingsService.getBookingsForCoach(coachId);
  }
}
