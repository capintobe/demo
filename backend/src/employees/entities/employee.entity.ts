// src/employees/entities/employee.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Timesheet } from '../../timesheets/entities/timesheet.entity';
import { LeaveRequest } from '../../leave-requests/entities/leave-request.entity';

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