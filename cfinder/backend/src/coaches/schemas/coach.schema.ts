import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoachDocument = Coach & Document;

@Schema()
export class Coach {
  @Prop({ required: true })
  userId: string;

  @Prop()
  bio: string;

  @Prop([String])
  disciplines: string[];

  @Prop({ default: 0 })
  rating: number;
}

export const CoachSchema = SchemaFactory.createForClass(Coach);
