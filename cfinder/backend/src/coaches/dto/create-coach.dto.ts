import { ApiProperty } from '@nestjs/swagger';

export class CreateCoachDto {
  @ApiProperty({ example: '12345', description: 'The user ID of the coach' })
  userId: string;

  @ApiProperty({ example: 'Experienced fitness coach', description: 'The bio of the coach' })
  bio: string;

  @ApiProperty({ example: ['fitness', 'yoga'], description: 'The disciplines the coach specializes in' })
  disciplines: string[];
}
