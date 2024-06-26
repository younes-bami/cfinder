import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ example: 'userId', description: 'The ID of the athlete' })
  athleteId: string;

  @ApiProperty({ example: 'coachId', description: 'The ID of the coach' })
  coachId: string;

  @ApiProperty({ example: '2024-06-26T10:00:00.000Z', description: 'The date and time of the session' })
  sessionDate: Date;

  @ApiProperty({ example: 'pending', description: 'The status of the booking' })
  status: string;
}
