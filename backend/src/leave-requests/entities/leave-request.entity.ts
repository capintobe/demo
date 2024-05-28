// src/leave-requests/entities/leave-request.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

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