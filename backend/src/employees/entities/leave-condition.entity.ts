import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LeaveConditions {
  @Field()
  annualLeave: number;

  @Field()
  sickLeave: number;

  @Field()
  otherLeave: number;
}