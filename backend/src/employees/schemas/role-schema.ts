import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LeaveConditions, LeaveConditionsSchema } from './leave-conditions.schema';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  payRate: number;

  @Prop({ type: LeaveConditionsSchema, required: true })
  leaveConditions: LeaveConditions;

  @Prop({ required: true })
  standardHours: number;
}

export const RoleSchema = SchemaFactory.createForClass(Role);