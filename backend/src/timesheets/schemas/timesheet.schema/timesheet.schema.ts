// src/timesheets/schemas/timesheet.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Employee } from '../../../employees/schemas/employee.schema/employee.schema';
import { Company } from '../../../company/schemas/company.schema/company.schema'

export type TimesheetDocument = Timesheet & Document;

@Schema()
export class Timesheet {
  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employee: Employee;

  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  company: Company;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  hoursWorked: number;
}

export const TimesheetSchema = SchemaFactory.createForClass(Timesheet);
