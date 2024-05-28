// src/pay-slips/dto/create-pay-slip.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaySlipInput {
  @Field()
  employeeId: string;

  @Field()
  periodStart: Date;

  @Field()
  periodEnd: Date;

  @Field()
  grossEarnings: number;

  @Field()
  taxes: number;

  @Field()
  netPay: number;

  @Field()
  role: string;
}