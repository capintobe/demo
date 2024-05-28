// src/timesheets/dto/create-timesheet.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTimesheetInput {
  @Field()
  employeeId: string;

  @Field()
  date: Date;

  @Field()
  hoursWorked: number;

  @Field()
  role: string;
}