import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop({ required: true })
  athleteId: string;

  @Prop({ required: true })
  coachId: string;

  @Prop({ required: true })
  sessionDate: Date;

  @Prop({ default: 'pending' })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
