import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coach, CoachDocument } from './schemas/coach.schema';

@Injectable()
export class CoachesService {
  constructor(@InjectModel(Coach.name) private coachModel: Model<CoachDocument>) {}

  async createCoach(createCoachDto: any): Promise<Coach> {
    const createdCoach = new this.coachModel(createCoachDto);
    return createdCoach.save();
  }

  async findAll(): Promise<Coach[]> {
    return this.coachModel.find().exec();
  }

  async findOne(id: string): Promise<Coach> {
    return this.coachModel.findById(id).exec();
  }

  async updateRating(id: string, rating: number): Promise<Coach> {
    return this.coachModel.findByIdAndUpdate(id, { rating }, { new: true }).exec();
  }
}
