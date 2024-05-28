// src/timesheets/entities/timesheet.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

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