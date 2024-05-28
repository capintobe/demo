import { ObjectType, Field } from '@nestjs/graphql';
import { LeaveConditions } from './leave-condition.entity';

@ObjectType()
export class Role {
  @Field()
  title: string;

  @Field()
  payRate: number;

  @Field(() => LeaveConditions)
  leaveConditions: LeaveConditions;

  @Field()
  standardHours: number;
}