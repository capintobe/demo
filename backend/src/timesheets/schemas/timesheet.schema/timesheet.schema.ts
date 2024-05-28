// src/timesheets/schemas/timesheet.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TimesheetDocument = Timesheet & Document;

@Schema()
export class Timesheet {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  hoursWorked: number;

  @Prop({ required: true })
  role: string;
}

export const TimesheetSchema = SchemaFactory.createForClass(Timesheet);