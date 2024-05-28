// src/leave-requests/dto/create-leave-request.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLeaveRequestInput {
  @Field()
  employeeId: string;

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