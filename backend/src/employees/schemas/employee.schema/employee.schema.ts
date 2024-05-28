// src/employees/schemas/employee.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LeaveRequest, Timesheet } from '../../entities/employee.entity';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Object, ref: 'Role' }], required: true })
  roles: Role[];

  @Prop({ type: [{ type: Object, ref: 'Timesheet' }] })
  timesheets: Timesheet[];

  @Prop({ type: [{ type: Object, ref: 'LeaveRequest' }] })
  leaveRequests: LeaveRequest[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

@Schema()
export class Role {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  payRate: number;

  @Prop({ required: true })
  annualLeave: number;

  @Prop({ required: true })
  sickLeave: number;

  @Prop({ required: true })
  otherLeave: number;

  @Prop({ required: true })
  standardHours: number;
}

export const RoleSchema = SchemaFactory.createForClass(Role);