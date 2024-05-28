import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class LeaveConditionsInput {
  @Field(() => Float)
  annualLeave: number;

  @Field(() => Float)
  sickLeave: number;

  @Field(() => Float)
  otherLeave: number;
}

@InputType()
export class RoleInput {
  @Field()
  title: string;

  @Field(() => Float)
  payRate: number;

  @Field(() => LeaveConditionsInput)
  leaveConditions: LeaveConditionsInput;

  @Field(() => Float)
  standardHours: number;
}