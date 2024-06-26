import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @ApiProperty({ example: 'confirmed', description: 'The updated status of the booking' })
  status: string;
}
