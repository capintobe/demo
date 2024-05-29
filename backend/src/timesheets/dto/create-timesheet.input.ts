import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTimesheetInput {
  @Field()
  employeeId: string;

  @Field()
  companyId: string;

  @Field()
  role: string;

  @Field()
  date: Date;

  @Field()
  hoursWorked: number;
}
