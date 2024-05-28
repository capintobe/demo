import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoleInput {
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