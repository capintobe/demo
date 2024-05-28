import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaveConditionsDocument = LeaveConditions & Document;

@Schema()
export class LeaveConditions {
  @Prop({ required: true })
  annualLeave: number;

  @Prop({ required: true })
  sickLeave: number;

  @Prop({ required: true })
  otherLeave: number;
}

export const LeaveConditionsSchema = SchemaFactory.createForClass(LeaveConditions);