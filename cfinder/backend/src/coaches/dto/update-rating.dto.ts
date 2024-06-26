import { ApiProperty } from '@nestjs/swagger';

export class UpdateRatingDto {
  @ApiProperty({ example: 5, description: 'The new rating for the coach' })
  rating: number;
}
