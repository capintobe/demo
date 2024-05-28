// src/employees/entities/employee.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Role])
  roles: Role[];

  @Field(() => [Timesheet])
  timesheets: Timesheet[];

  @Field(() => [LeaveRequest])
  leaveRequests: LeaveRequest[];
}

@ObjectType()
export class Role {
  @Field()
  title: string;

  @Field()
  payRate: number;

  @Field()
  annualLeave: number;

  @Field()
  sickLeave: number;

  @Field()
  otherLeave: number;

  @Field()
  standardHours: number;
}

@ObjectType()
export class Timesheet {
  @Field(() => ID)
  id: string;

  @Field()
  date: Date;

  @Field()
  hoursWorked: number;

  @Field()
  role: string;
}

@ObjectType()
export class LeaveRequest {
  @Field(() => ID)
  id: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  type: string;

  @Field()
  status: string;

  @Field()
  role: string;
}