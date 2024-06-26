import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CoachesService } from './coaches.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@ApiTags('coaches')
@Controller('coaches')
export class CoachesController {
  constructor(private coachesService: CoachesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new coach' })
  @ApiResponse({ status: 201, description: 'Coach created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createCoachDto: CreateCoachDto) {
    return this.coachesService.createCoach(createCoachDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all coaches' })
  @ApiResponse({ status: 200, description: 'Coaches retrieved successfully.' })
  async findAll() {
    return this.coachesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a coach by ID' })
  @ApiResponse({ status: 200, description: 'Coach retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Coach not found.' })
  async findOne(@Param('id') id: string) {
    return this.coachesService.findOne(id);
  }

  @Patch(':id/rating')
  @ApiOperation({ summary: 'Update coach rating' })
  @ApiResponse({ status: 200, description: 'Rating updated successfully.' })
  @ApiResponse({ status: 404, description: 'Coach not found.' })
  async updateRating(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.coachesService.updateRating(id, updateRatingDto.rating);
  }
}
